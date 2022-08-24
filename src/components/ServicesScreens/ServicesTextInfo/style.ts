import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import MontserratTextSC from "../../../UI/MontserratTextSC/MontserratTextSC";
import { WHITE_COLOR } from "../../../lib/constants/constantsColors";
import { PADDING_TOP_HEADER } from "../../../lib/constants/constants";

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    paddingTop: PADDING_TOP_HEADER,
    backgroundColor: WHITE_COLOR,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    marginBottom: 40,
  },
  scrollContainer: {
    minHeight: "100%",
    paddingHorizontal: 33,
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
