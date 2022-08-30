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
    flexDirection: "row",
    paddingTop: 20,
    backgroundColor: WHITE_COLOR,
    marginBottom: 25,
    paddingBottom: 10,
  },
  bottomContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: 20,
    marginBottom: 35,
    paddingRight: 21,
  },
  buttonFileContainer: {
    alignItems: "flex-end",
  },
  buttonContainer: {
    maxWidth: 234,
    minHeight: 50,
    marginBottom: 17,
  },
  viewDocButton: {
    height: "auto",
    marginBottom: 17,
    maxWidth: 354,
    width: "100%",
  },
  downloadButton: {
    height: "auto",
    marginBottom: 16,
    maxWidth: 354,
    width: "100%",
  },
  downloadDefault: {
    height: "auto",
    maxWidth: 250,
    width: "100%",
  },
});

const DescriptionSC = styled(MontserratTextSC)`
  text-align: justify;
  padding-bottom: 20px;
`;

export const useServicesTextInfoStyles = () => ({ styles, DescriptionSC });
