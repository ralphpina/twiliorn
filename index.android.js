/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    // $FlowFixMe
} from 'react-native';

import TwilioVideoView from './TwilioVideoView';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

// ralph.pina+2@gmail.com
const ACCESS_ONE = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2E1MWFjMmZlNWQ0NTJmYTc1M2IzNWU3Njk1NzhkMjQxLTE0ODc1NTc2NTkiLCJpc3MiOiJTS2E1MWFjMmZlNWQ0NTJmYTc1M2IzNWU3Njk1NzhkMjQxIiwic3ViIjoiQUM1NzRmM2YxNDNjOWU2ZjQ3ZDNkMzliZWZkZWQ0MjQzZiIsImV4cCI6MTQ4NzU2MTI1OSwiZ3JhbnRzIjp7ImlkZW50aXR5IjoicmFscGgucGluYSsyQGdtYWlsLmNvbSIsInJ0YyI6eyJjb25maWd1cmF0aW9uX3Byb2ZpbGVfc2lkIjoiVlNkMTVkMTI4MGQwZGI1MTQ1YzQ1MzIzMDc3N2M1ZWJmOCJ9fX0.N_ae2XAC6NjkmtOfzo9jB3dx7komxUlDNhHbzF8B6EY';
// ralph.pina+3@gmail.com
const ACCESS_TWO = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2E1MWFjMmZlNWQ0NTJmYTc1M2IzNWU3Njk1NzhkMjQxLTE0ODc1MjMyNzYiLCJpc3MiOiJTS2E1MWFjMmZlNWQ0NTJmYTc1M2IzNWU3Njk1NzhkMjQxIiwic3ViIjoiQUM1NzRmM2YxNDNjOWU2ZjQ3ZDNkMzliZWZkZWQ0MjQzZiIsImV4cCI6MTQ4NzUyNjg3NiwiZ3JhbnRzIjp7ImlkZW50aXR5IjoicmFscGgucGluYSszQGdtYWlsLmNvbSIsInJ0YyI6eyJjb25maWd1cmF0aW9uX3Byb2ZpbGVfc2lkIjoiVlNkMTVkMTI4MGQwZGI1MTQ1YzQ1MzIzMDc3N2M1ZWJmOCJ9fX0.HH0RedqsN-eQdgEEWMWQXtsQDh9hHiIL11XnIDwiZWs';

/**
 * You must provide a Twilio Access Token to connect to the Video service
 * @type {string}
 */
const TWILIO_ACCESS_TOKEN = ACCESS_ONE;

const twiliorn = () => (
    <TwilioVideoView
        twilioAccessToken={TWILIO_ACCESS_TOKEN}
        style={styles.container}
    />
);

twiliorn.displayName = 'twiliorn';
export default twiliorn;

AppRegistry.registerComponent('twiliorn', () => twiliorn);
