import { StyleSheet } from "react-native";
import {
  GRAY_COLOR_41,
  WHITE_COLOR,
} from "../../../../lib/constants/constantsColors";
import {
  BOTTOM_TAB_HEIGHT,
  IS_IOS,
  SCREEN_HEIGHT,
} from "../../../../lib/constants/constants";
import styled from "styled-components/native";

const DefaultFieldBlockSC = styled.View`
  background-color: #fff8ec;
  padding: 15px 26px;
  min-width: 288px;
  border-radius: 32.5px;
`;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 47,
    marginTop: IS_IOS ? 0 : 44,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 10,
    backgroundColor: WHITE_COLOR,
    height:
      SCREEN_HEIGHT -
      (IS_IOS ? BOTTOM_TAB_HEIGHT - 18 : BOTTOM_TAB_HEIGHT + 23),
  },
  wrapper: {
    marginTop: 47,
    alignItems: "center",
  },
  logoContainer: {
    width: 74,
    height: 74,
    marginBottom: 11,
  },
  userFIO: {
    marginBottom: 17,
  },
  userFIOText: {
    textAlign: "center",
  },
  defaultInputText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "500",
    color: GRAY_COLOR_41,
  },
  birthdayContainer: {
    minWidth: 175,
    marginBottom: 17,
  },
  fieldContainer: {
    marginBottom: 10,
  },
  minContainer: {
    minWidth: 288,
  },
  editButtonStyle: {
    marginTop: 26,
    minWidth: 234,
  },
  exitButton: {
    marginTop: 31,
    marginBottom: 43,
  },
  exitButtonText: {
    fontSize: 16,
    lineHeight: 20,
    color: "#BE3F24",
  },
  aboutContainer: {
    marginBottom: 50,
  },
});
export const useUserAuthStyles = () => ({ styles, DefaultFieldBlockSC });
