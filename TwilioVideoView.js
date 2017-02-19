// @flow
import {
    requireNativeComponent,
    View,
    // $FlowFixMe
} from 'react-native';
import React from 'react';

const TwilioVideoView = props => (
    <NativeView {...props} />
);

const NativeView = requireNativeComponent('RNTwilioVideoView', {
    propTypes: {
        ...View.propTypes,
    },
});

TwilioVideoView.displayName = 'TwilioVideoView';
export default TwilioVideoView;
