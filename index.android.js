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

const twiliorn = () => (
    <TwilioVideoView
        style={styles.container}
    />
);

twiliorn.displayName = 'twiliorn';
export default twiliorn;

AppRegistry.registerComponent('twiliorn', () => twiliorn);
