import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import MontserratTextSC from "../../../../UI/MontserratTextSC/MontserratTextSC";
import InputSC from "../../../../UI/InputSC/InputSC";
import {
  LIGHT_YELLOW_COLOR,
  SECONDARY_COLOR,
} from "../../../../lib/constants/constantsColors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: SECONDARY_COLOR,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 23,
    paddingHorizontal: 34,
  },
  textContainer: {},
  logoContainer: {
    width: 74,
    height: 74,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 21,
    paddingRight: 37,
    marginBottom: 21,
  },
  searchIconContainer: {
    width: 29,
    height: 29,
    marginLeft: 15,
  },
});

const FirstMontserratTextSC = styled(MontserratTextSC)`
  margin-bottom: 20px;
`;

const ServicesInputSC = styled(InputSC)`
  height: 49px;
  background-color: #fff8ec;
`;

export const useHomeHeaderStyles = () => ({
  styles,
  ServicesInputSC,
  FirstMontserratTextSC,
});
