import React, { useState } from "react";
import {
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuthFieldStyles } from "../../../components/ProfileScreens/Auth/AuthField/style";
import { GRAY_COLOR_41 } from "../../../lib/constants/constantsColors";
import PasswordInputIcon from "../../../assets/icon/PasswordInputIcon.svg";

interface IInputPasswordUIProps {
  inputProps?: TextInputProps;
}

const InputPasswordUI = ({ inputProps = {} }: IInputPasswordUIProps) => {
  const [isSecureText, setIsSecureText] = useState<boolean>(true);
  const handleChangeSecureText = () =>
    setIsSecureText((prevState) => !prevState);
  return (
    <View>
      <View style={styles.inputContainer}>
        <FieldInputSC
          {...inputProps}
          style={styles.input}
          secureTextEntry={isSecureText}
          placeholderTextColor={GRAY_COLOR_41}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleChangeSecureText}>
          <View style={styles.iconContainer}>
            <PasswordInputIcon />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
  },
  input: {
    paddingRight: 65,
  },
  buttonContainer: {
    position: "absolute",
    right: 15,
    bottom: 10,
    width: 40,
    height: 49,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: 27,
    height: 25,
  },
});

const { FieldInputSC } = useAuthFieldStyles();

export default React.memo(InputPasswordUI);
