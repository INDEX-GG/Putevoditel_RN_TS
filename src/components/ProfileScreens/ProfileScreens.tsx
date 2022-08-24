import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../screens/types";
import Profile from "./Profile/Profile";
import SignIn from "./Auth/SignIn/SignIn";
import SignUp from "./Auth/SignUp/SignUp";
import ResetPassword from "./Auth/ResetPassword/ResetPassword";
import EditProfile from "./EditProfile/EditProfile";
import About from "./About/About";
import Policy from "./Policy/Policy";

const ProfileStack = createNativeStackNavigator<ProfileStackParams>();

const options = { headerShown: false };

const ProfileScreens = () => {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={options}
      />
      <ProfileStack.Screen
        name="ProfileEdit"
        component={EditProfile}
        options={options}
      />
      <ProfileStack.Screen name="About" component={About} options={options} />
      <ProfileStack.Screen name="Policy" component={Policy} options={options} />
      <ProfileStack.Screen name="SignIn" component={SignIn} options={options} />
      <ProfileStack.Screen name="SignUp" component={SignUp} options={options} />
      <ProfileStack.Screen
        name="ResetPassword"
        component={ResetPassword}
        initialParams={{ email: "" }}
        options={options}
      />
    </ProfileStack.Navigator>
  );
};

export default React.memo(ProfileScreens);
