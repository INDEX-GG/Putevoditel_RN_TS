import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import MontserratTextSC from "../../../UI/MontserratTextSC/MontserratTextSC";
import {
  SECONDARY_COLOR,
  WHITE_COLOR,
} from "../../../lib/constants/constantsColors";

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    backgroundColor: SECONDARY_COLOR,
  },
  infoContainer: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  scrollContainer: {
    height: "100%",
    paddingHorizontal: 27,
  },
  header: {
    backgroundColor: WHITE_COLOR,
    marginBottom: 25,
    paddingBottom: 10,
  },
  bottomContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 40,
    marginBottom: 35,
    paddingRight: 21,
  },
  buttonContainer: {
    maxWidth: 234,
    minHeight: 50,
  },
});

const DescriptionSC = styled(MontserratTextSC)`
  text-align: justify;
`;

export const useServicesTextInfoStyles = () => ({ styles, DescriptionSC });
