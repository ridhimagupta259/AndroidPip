package com.sampleproject;

import com.facebook.react.ReactActivity;
import android.content.Intent;
import android.content.res.Configuration;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "sampleproject";
  }

  // To let JS knows about PIP mode change. 
    @Override public void onPictureInPictureModeChanged(boolean isInPictureInPictureMode, Configuration newConfig) {
       super.onPictureInPictureModeChanged(isInPictureInPictureMode, newConfig);
       Intent intent = new Intent("onPictureInPictureModeChanged");
       intent.putExtra("isInPictureInPictureMode", isInPictureInPictureMode);
       this.sendBroadcast(intent);
    }
    
    // To trigger PIP mode by pressing `Home` or `Recent` buttons
    @Override 
      protected void onUserLeaveHint() {
       Intent intent = new Intent("onUserLeaveHint");
       this.sendBroadcast(intent);
       super.onUserLeaveHint();
    }
        
    // To close and kill the app when closing PIP window.
   //  @Override public void onStop() {
   //     super.onStop();
   //     finishAndRemoveTask();
   //  }
}
