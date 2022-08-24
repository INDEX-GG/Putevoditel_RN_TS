import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import ArrowLeft from "../../../assets/icon/ArrowLeft.svg";
import RalewayTextSC from "../../../UI/RalewayTextSC/RalewayTextSC";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import {
  ServicesStackParams,
  ServicesTextInfoType,
} from "../../../screens/types";

interface IServicesHeaderProps {
  title: string;
  paddingLeft?: number;
}

const ServicesHeader = ({ title, paddingLeft = 4 }: IServicesHeaderProps) => {
  const { goBack, getState, navigate } =
    useNavigation<NavigationProp<ServicesStackParams, "Services">>();

  const handlePressBack = () => {
    const params = getState().routes[0].params as ServicesTextInfoType;
    console.log(params.isSearch);
    if (params.isSearch) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      navigate("Search");
      return;
    }
    goBack();
  };

  return (
    <TouchableHeaderSC
      onPress={handlePressBack}
      activeOpacity={0.6}
      paddingLeft={paddingLeft}>
      <View style={styles.icon}>
        <ArrowLeft />
      </View>
      <RalewayTextSC numberOfLines={2} ellipsizeMode="tail">
        {title}
      </RalewayTextSC>
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
