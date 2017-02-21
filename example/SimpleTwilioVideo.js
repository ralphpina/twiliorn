// @flow

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    // $FlowFixMe
} from 'react-native';

import TwilioVideoView from '../TwilioVideoView';
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
    buttonText: {
        padding: 15,
        position: 'absolute',
        fontSize: 30,
        color: 'red',
    },
});

const SimpleTwilioVideo = () => ({
    render() {
        return (
            <View style={styles.container}>
                <TwilioVideoView
                    style={styles.twilioView}
                    twilioAccessToken={TWILIO_ACCESS_TOKEN}
                />
                <Text
                    style={styles.buttonText}
                    onPress={() => this.props.navigator.pop()}
                >
                    Back
                </Text>
            </View>
        );
    },
});

SimpleTwilioVideo.displayName = 'SimpleTwilioVideo';
export default SimpleTwilioVideo;
