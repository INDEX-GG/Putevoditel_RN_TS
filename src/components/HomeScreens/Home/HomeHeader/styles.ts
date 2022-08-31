import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import MontserratTextSC from "../../../../UI/MontserratTextSC/MontserratTextSC";
import {
  LIGHT_ORANGE_COLOR,
  SECONDARY_COLOR,
} from "../../../../lib/constants/constantsColors";
import { useOrientationStore } from "../../../../hooks/useOrientationStore";

const FirstMontserratTextSC = styled(MontserratTextSC)`
  margin-bottom: 20px;
`;

export const useHomeHeaderStyles = () => {
  const { isHorizontal } = useOrientationStore();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: SECONDARY_COLOR,
    },
    headerText: {
      marginBottom: isHorizontal ? 5 : 20,
    },
    subHeaderText: isHorizontal ? { fontSize: 20, lineHeight: 24 } : {},
    infoContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: isHorizontal ? 15 : 23,
      paddingHorizontal: 34,
    },
    textContainer: isHorizontal
      ? {}
      : {
          maxWidth: 280,
        },
    logoContainer: {
      width: isHorizontal ? 54 : 74,
      height: isHorizontal ? 54 : 74,
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 21,
      paddingRight: 37,
      marginBottom: isHorizontal ? 15 : 21,
    },
    searchIconContainer: {
      width: 29,
      height: 29,
      marginLeft: 15,
    },
    search: {
      flex: 1,
      backgroundColor: "#FFF8EC",
      paddingVertical: isHorizontal ? 10 : 15,
      paddingHorizontal: 26,
      borderRadius: 32.5,
    },
    searchText: {
      color: LIGHT_ORANGE_COLOR,
      fontSize: 16,
      lineHeight: 20,
    },
  });

  return {
    styles,
    isHorizontal,
    FirstMontserratTextSC,
  };
};
