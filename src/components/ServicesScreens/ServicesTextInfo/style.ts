import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import MontserratTextSC from "../../../UI/MontserratTextSC/MontserratTextSC";
import { WHITE_COLOR } from "../../../lib/constants/constantsColors";

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    paddingHorizontal: 33,
    backgroundColor: WHITE_COLOR,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    marginBottom: 40,
  },
  header: {
    marginBottom: 35,
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
  },
});

const DescriptionSC = styled(MontserratTextSC)``;

export const useServicesTextInfoStyles = () => ({ styles, DescriptionSC });
