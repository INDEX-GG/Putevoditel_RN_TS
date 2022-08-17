import React from "react";
import UserNotAuth from "./UserNotAuth/UserNotAuth";
import UserAuth from "./UserAuth/UserAuth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../../screens/types";
import { useUserStore } from "../../../hooks/useUserStore";

type Props = NativeStackScreenProps<ProfileStackParams>;

const Profile = ({ navigation }: Props) => {
  const { isAuth } = useUserStore();
  const handlePressSignIn = () => navigation.navigate("SignIn");
  const handlePressSignUp = () => navigation.navigate("SignUp");

  return isAuth ? (
    <UserAuth />
  ) : (
    <UserNotAuth
      handlePressSignIn={handlePressSignIn}
      handlePressSignUp={handlePressSignUp}
    />
  );
};

export default React.memo(Profile);
