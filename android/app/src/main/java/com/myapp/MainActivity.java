package com.myapp;

import com.facebook.react.ReactActivity;
import android.os.Bundle;

import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected void onCreate(Bundle saveInstanceState) {
    SplashScreen.show(this);
    super.onCreate(saveInstanceState);
  }

  @Override
  protected String getMainComponentName() {
    return "MyApp";
  }
}
