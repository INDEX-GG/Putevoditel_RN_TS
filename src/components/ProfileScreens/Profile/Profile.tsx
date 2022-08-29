import React from "react";
import UserNotAuth from "./UserNotAuth/UserNotAuth";
import UserAuth from "./UserAuth/UserAuth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../../screens/types";
import { useUserStore } from "../../../hooks/useUserStore";
import { useChangeBottomTab } from "../../../hooks/useChangeBottomTab";

type Props = NativeStackScreenProps<ProfileStackParams>;

const Profile = ({ navigation }: Props) => {
  useChangeBottomTab({ isView: true });
  const { isAuth } = useUserStore();
  const handlePressSignIn = () => navigation.navigate("SignIn");
  const handlePressSignUp = () => navigation.navigate("SignUp");
  const handlePressEditProfile = () => navigation.navigate("ProfileEdit");

  return isAuth ? (
    <UserAuth handlePressEditProfile={handlePressEditProfile} />
  ) : (
    <UserNotAuth
      handlePressSignIn={handlePressSignIn}
      handlePressSignUp={handlePressSignUp}
    />
  );
};

export default React.memo(Profile);
