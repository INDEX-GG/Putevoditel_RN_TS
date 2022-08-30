import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import ArrowLeft from "../../../assets/icon/ArrowLeft.svg";
import RalewayTextSC from "../../../UI/RalewayTextSC/RalewayTextSC";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import {
  ServicesStackParams,
  ServicesTextInfoType,
} from "../../../screens/types";
import { useOrientationStore } from "../../../hooks/useOrientationStore";

interface IServicesHeaderProps {
  title: string;
  paddingLeft?: number;
  onPress?: () => void;
  onPressShare?: () => void;
  children?: React.ReactNode;
}

const ServicesHeader = ({
  title,
  paddingLeft = 4,
  onPress,
  onPressShare,
  children = undefined,
}: IServicesHeaderProps) => {
  const { goBack, getState, navigate } =
    useNavigation<NavigationProp<ServicesStackParams, "Services">>();
  const { SCREEN_WIDTH } = useOrientationStore();

  const handlePressBack = () => {
    const params = getState().routes[0].params as ServicesTextInfoType;
    if (params?.isSearch) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      navigate("Search");
      return;
    }
    if (onPress) onPress();
    goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableHeaderSC
        onPress={handlePressBack}
        activeOpacity={0.6}
        paddingLeft={paddingLeft}>
        <View style={styles.icon}>
          <ArrowLeft />
        </View>
        <RalewayTextSC
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{
            width: "100%",
            maxWidth: SCREEN_WIDTH - 100 - (children ? 30 : 0),
          }}>
          {title}
        </RalewayTextSC>
      </TouchableHeaderSC>
      {children ? (
        <TouchableOpacity onPress={onPressShare} style={styles.childrenLeft}>
          {children}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  childrenLeft: {
    flexGrow: 1,
    marginLeft: 10,
    alignItems: "flex-end",
    height: 30,
    justifyContent: "center",
  },
  icon: {
    marginRight: 15,
  },
});

const TouchableHeaderSC = styled.TouchableOpacity<{
  paddingLeft: number;
}>`
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  padding-left: ${({ paddingLeft }) => paddingLeft}px;
`;

export default React.memo(ServicesHeader);
