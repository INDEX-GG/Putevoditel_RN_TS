import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import ArrowLeft from "../../../assets/icon/ArrowLeft.svg";
import RalewayTextSC from "../../../UI/RalewayTextSC/RalewayTextSC";

interface IServicesHeaderProps {
  title: string;
  handlePushBack: () => void;
}

const ServicesHeader = ({ title, handlePushBack }: IServicesHeaderProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styled.header}
      onPress={handlePushBack}>
      <View style={styled.icon}>
        <ArrowLeft />
      </View>
      <RalewayTextSC>{title}</RalewayTextSC>
    </TouchableOpacity>
  );
};

const styled = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    paddingLeft: 4,
  },
  icon: {
    marginRight: 15,
  },
});

export default React.memo(ServicesHeader);
