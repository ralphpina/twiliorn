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

// ralph.pina+2@gmail.com
const ACCESS_ONE = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2E1MWFjMmZlNWQ0NTJmYTc1M2IzNWU3Njk1NzhkMjQxLTE0ODc1NjU2OTYiLCJpc3MiOiJTS2E1MWFjMmZlNWQ0NTJmYTc1M2IzNWU3Njk1NzhkMjQxIiwic3ViIjoiQUM1NzRmM2YxNDNjOWU2ZjQ3ZDNkMzliZWZkZWQ0MjQzZiIsImV4cCI6MTQ4NzU2OTI5NiwiZ3JhbnRzIjp7ImlkZW50aXR5IjoicmFscGgucGluYSsyQGdtYWlsLmNvbSIsInJ0YyI6eyJjb25maWd1cmF0aW9uX3Byb2ZpbGVfc2lkIjoiVlNkMTVkMTI4MGQwZGI1MTQ1YzQ1MzIzMDc3N2M1ZWJmOCJ9fX0.5xCX-DbOBu8sdSvvzNL1N9Em6vlCdB6D8x-ttgtB_IY';
// ralph.pina+3@gmail.com
const ACCESS_TWO = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2E1MWFjMmZlNWQ0NTJmYTc1M2IzNWU3Njk1NzhkMjQxLTE0ODc1MjMyNzYiLCJpc3MiOiJTS2E1MWFjMmZlNWQ0NTJmYTc1M2IzNWU3Njk1NzhkMjQxIiwic3ViIjoiQUM1NzRmM2YxNDNjOWU2ZjQ3ZDNkMzliZWZkZWQ0MjQzZiIsImV4cCI6MTQ4NzUyNjg3NiwiZ3JhbnRzIjp7ImlkZW50aXR5IjoicmFscGgucGluYSszQGdtYWlsLmNvbSIsInJ0YyI6eyJjb25maWd1cmF0aW9uX3Byb2ZpbGVfc2lkIjoiVlNkMTVkMTI4MGQwZGI1MTQ1YzQ1MzIzMDc3N2M1ZWJmOCJ9fX0.HH0RedqsN-eQdgEEWMWQXtsQDh9hHiIL11XnIDwiZWs';

/**
 * You must provide a Twilio Access Token to connect to the Video service
 * @type {string}
 */
const TWILIO_ACCESS_TOKEN = ACCESS_ONE;

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
                    onPress={this.props.navigator.pop()}
                >
                    Back
                </Text>
            </View>
        );
    },
});

SimpleTwilioVideo.displayName = 'SimpleTwilioVideo';
export default SimpleTwilioVideo;
