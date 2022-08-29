import { StyleSheet } from "react-native";
import {
  GRAY_COLOR_41,
  SECONDARY_COLOR,
  WHITE_COLOR,
} from "../../../../lib/constants/constantsColors";
import styled from "styled-components/native";

const DefaultFieldBlockSC = styled.View`
  background-color: #fff8ec;
  padding: 15px 26px;
  min-width: 288px;
  border-radius: 32.5px;
`;

const styles = StyleSheet.create({
  container: {
    backgroundColor: SECONDARY_COLOR,
  },
  scrollContainer: {
    marginTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 10,
    backgroundColor: WHITE_COLOR,
  },
  contentContainer: {
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
    marginBottom: 53,
  },
});
export const useUserAuthStyles = () => ({ styles, DefaultFieldBlockSC });
