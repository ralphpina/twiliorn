// @flow

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableHighlight,
    // $FlowFixMe
} from 'react-native';

import CustomTwilioVideoView from '../CustomTwilioVideoView';

import {TWILIO_ACCESS_TOKEN} from '../index.android'

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    twilioView: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        width,
        height: height - 24, // 24 for the Android soft button bar
    },
    backButtonText: {
        padding: 15,
        position: 'absolute',
        fontSize: 30,
        color: 'red',
    },
    connectButtom: {
        bottom: 30,
        right: 30,
        padding: 15,
        position: 'absolute',
        alignItems: 'center',
        backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 16,
        borderRadius: 60 / 2,
        height: 60,
        width: 60,
    },
    connectText: {
        fontSize: 30,
        color: 'red',
    },
    statusText: {
        bottom: 30,
        left: 30,
        padding: 15,
        position: 'absolute',
        fontSize: 15,
        color: 'red',
    },
    toogleAudio: {
        bottom: 150,
        right: 30,
        padding: 10,
        position: 'absolute',
        backgroundColor: 'gray',
    },
    toogleVideo: {
        bottom: 230,
        right: 30,
        padding: 10,
        position: 'absolute',
        backgroundColor: 'gray',
    },
    switchCamera: {
        bottom: 310,
        right: 30,
        padding: 10,
        position: 'absolute',
        backgroundColor: 'gray',
    },
    buttonText: {
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 10,
        color: 'red',
    },
});

const ROOM_NAME = 'testroom123';

export default class CustomizedTwilioVideo extends Component {

    twilioView: CustomizedTwilioVideo;

    constructor(props) {
        super(props);

        this.state = {
            statusText: '',
            isConnected: false,
        };
    }

    connectButtonPress() {
        this.state.isConnected ? this.twilioView.disconnect() : this.twilioView.connect(ROOM_NAME);
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomTwilioVideoView
                    ref={(twilioView) => { this.twilioView = twilioView; }}
                    style={styles.twilioView}
                    twilioAccessToken={TWILIO_ACCESS_TOKEN}
                    onConnected={() => {
                        this.setState({
                            statusText: 'connected',
                            isConnected: true,
                        })
                    }}
                    onConnectFailure={event => this.setState({statusText: 'error: ' + event.nativeEvent.reason})}
                    onDisconnected={() => {
                        this.setState({
                            statusText: 'disconnected',
                            isConnected: false,
                        })
                    }}
                    onParticipantConnected={event => this.setState({statusText: 'new participant: ' + event.nativeEvent.participant})}
                    onParticipantDisconnected={event => this.setState({statusText: 'participant disconnected'})}
                />
                <Text
                    style={styles.backButtonText}
                    onPress={() => this.props.navigator.pop()}
                >
                    Back
                </Text>
                <TouchableHighlight
                    style={styles.switchCamera}
                    onPress={() => this.twilioView.switchCamera()}
                >
                    <Text style={styles.buttonText}>Camera</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.toogleVideo}
                    onPress={() => this.twilioView.toggleVideo()}
                >
                    <Text style={styles.buttonText}>Video</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.toogleAudio}
                    onPress={() => this.twilioView.toggleSound()}
                >
                    <Text style={styles.buttonText}>Audio</Text>
                </TouchableHighlight>
                <View
                    style={styles.connectButtom}>
                    <Text
                        style={styles.connectText}
                        onPress={() => this.connectButtonPress()}
                    >
                        {this.state.isConnected ? 'D': 'C'}
                    </Text>
                </View>
                <Text
                    style={styles.statusText}
                >
                    {this.state.statusText}
                </Text>
            </View>
        );
    }
}
