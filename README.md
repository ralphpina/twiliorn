Twilio Video SDK React Native Wrapper
--

###Currently Android Only
There is an iOS only project that can be found here:
https://github.com/gaston23/react-native-twilio-video-webrtc

##Installation
**TODO**: Currently it is not being distributed via npm. So you would need to import the `android/library` module and copy/paste the `TwilioVideoView` into your project.

##Running Sample
1) Clone this repo.
2) Install dependencies. I use Yarn, so you can do `yarn` in the directory. Or use NPM and run `npm i`.
3) Generate an access token as described [here](https://github.com/twilio/video-quickstart-android#quickstart).
4) Set the access token in `index.android.js`.
5) Run `react-native run-android` with an emulator or device connected.

Probably a good idea to read the [docs](https://www.twilio.com/docs/api/video/getting-started).

##Permissions
The library project declares the following permissions, which **will be merged** into your `AndroidManifest.xml`:

```xml
<manifest>
    <uses-feature android:name="android.hardware.camera"/>
    <uses-feature android:name="android.hardware.camera.autofocus"/>
    <uses-feature
        android:glEsVersion="0x00020000"
        android:required="true"/>
    
    <uses-permission android:name="android.permission.CAMERA"/>
    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.RECORD_AUDIO"/>
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS"/>
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/><uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
    
    ...
</manifest>
```
##Usage

There are two classes that can be used: 
`TwilioVideoView` - this is a basic setup that does not allow customization. All the UI, buttons, behavior, etc. are implemented natively.

```javascript
<TwilioVideoView
    style={styles.twilioView}
    twilioAccessToken={TWILIO_ACCESS_TOKEN}/>
```
`CustomTwilioVideoView` - this provides you you a way to customize and listen to events. You will need to create your own UI components such as buttons. You'll still get a main window for the call, as well as a thumbnail for the participant.

```javascript
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
```


##Screenshot

![Sample App](twilio-video-sample-screenshot.png "Sample App")
