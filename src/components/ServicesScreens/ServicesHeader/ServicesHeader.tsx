import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import ArrowLeft from "../../../assets/icon/ArrowLeft.svg";
import RalewayTextSC from "../../../UI/RalewayTextSC/RalewayTextSC";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

interface IServicesHeaderProps {
  title: string;
  paddingLeft?: number;
}

const ServicesHeader = ({ title, paddingLeft = 4 }: IServicesHeaderProps) => {
  const { goBack } = useNavigation();

  return (
    <TouchableHeaderSC
      onPress={goBack}
      activeOpacity={0.6}
      paddingLeft={paddingLeft}>
      <View style={styles.icon}>
        <ArrowLeft />
      </View>
      <RalewayTextSC>{title}</RalewayTextSC>
    </TouchableHeaderSC>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 15,
  },
});

const TouchableHeaderSC = styled.TouchableOpacity<{ paddingLeft: number }>`
  flex-direction: row;
  align-items: center;
  padding-left: ${({ paddingLeft }) => paddingLeft}px;
  max-width: ${Dimensions.get("window").width - 100};
`;

export default React.memo(ServicesHeader);
