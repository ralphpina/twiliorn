package com.twiliorn.library;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class TwilioVideoViewManager extends SimpleViewManager<TwilioVideoView> {

    public static final String REACT_CLASS = "RNTwilioVideoView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected TwilioVideoView createViewInstance(ThemedReactContext reactContext) {
        return new TwilioVideoView(reactContext);
    }


}
