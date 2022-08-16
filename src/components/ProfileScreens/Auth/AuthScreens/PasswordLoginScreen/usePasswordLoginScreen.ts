import { useState } from "react";
import { useAuth } from "../../useAuth";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ProfileStackParams } from "../../../../../screens/types";

export const usePasswordLoginScreen = () => {
  const { handleChangePasswordInput } = useAuth();
  const { navigate } = useNavigation<NavigationProp<ProfileStackParams>>();
  const [password, setPassword] = useState<string>("");
  return {
    password,
    navigate,
    setPassword,
    handleChangePasswordInput,
  };
};
