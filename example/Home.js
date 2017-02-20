// @flow

import React from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    View,
    Text,
    Image,
    // $FlowFixMe
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 80,
        alignItems: 'center',
    },
    heading: {
        fontSize: 22,
        marginTop: 50,
        marginBottom: 20,
        paddingHorizontal: 30,
        textAlign: 'center',
    },
    button: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 30,
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 10,
        color: 'red',
    },
});

const Home = props => ({
    navigate(name: string) {
        props.navigator.push({
            name,
            passProps: {
                name,
            },
        });
    },

    render() {
        return (
            <View style={styles.container}>
                <Image
                    // eslint-disable-next-line global-require
                    source={require('./images/twilio_icon.png')}
                />
                <Text
                    style={styles.heading}
                >
                    Hello. Try our two Twilio video examples.
                </Text>
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => this.navigate('SimpleTwilioVideo')}
                >
                    <Text style={styles.buttonText}>Simple View</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => this.navigate('CustomTwilioVideo')}
                >
                    <Text style={styles.buttonText}>Custom View</Text>
                </TouchableHighlight>
            </View>
        );
    },
});

Home.displayName = 'Home';
export default Home;
