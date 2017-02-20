Twilio Video SDK React Native Wrapper
--

###Currently Android Only
There is an iOS only project that can be found here:
https://github.com/gaston23/react-native-twilio-video-webrtc

##Installation

**TODO**: Currently it is not being distributed via npm. So you would need to import the `android/library` module and copy/paste the `TwilioVideoView` into your project.

###Permissions
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
##Screenshot

![Sample App](twilio-video-sample-screenshot.png "Sample App")
