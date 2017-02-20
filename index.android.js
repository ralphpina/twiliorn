/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    AppRegistry,
    Navigator,
    // $FlowFixMe
} from 'react-native';

import Home from './example/Home';
import SimpleTwilioVideo from './example/SimpleTwilioVideo';
import CustomTwilioVideo from './example/CustomTwilioVideo';

function renderScene(route, navigator) {
    if (route.name === 'Main') {
        return <Home navigator={navigator} {...route.passProps} />;
    }
    if (route.name === 'SimpleTwilioVideo') {
        return <SimpleTwilioVideo navigator={navigator} {...route.passProps} />;
    }
    if (route.name === 'CustomTwilioVideo') {
        return <CustomTwilioVideo navigator={navigator} {...route.passProps} />;
    }
    return null;
}

const App = () => ({
    render() {
        return (
            <Navigator
                style={{ flex: 1 }}
                initialRoute={{ name: 'Main' }}
                renderScene={renderScene}
            />
        );
    },
});

AppRegistry.registerComponent('twiliorn', () => App);
