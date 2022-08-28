import React from "react";
import { IHomeServicesModel } from "../../../lib/models/IHomeServicesModel";
import { useHomeCardStyles } from "./style";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../../../screens/types";

const HomeCard = ({
  title,
  photo,
  redirectData,
  redirectTitle,
  description,
  backgroundColor,
}: IHomeServicesModel) => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamsList>>();

  const handlePush = () => {
    navigate("ServicesStack", {
      screen: "Services",
      params: { title: redirectTitle, data: redirectData },
    });
  };

  return (
    <ContainerSC
      activeOpacity={0.6}
      backgroundColor={backgroundColor}
      onPress={handlePush}>
      <TitleSC>{title}</TitleSC>
      <SubtitleSC fontWeight={400}>{description}</SubtitleSC>
      <ImageSC
        source={photo.uri}
        style={{ ...photo }}
        width={photo.width}
        height={photo.height}
      />
    </ContainerSC>
  );
};

const { ContainerSC, TitleSC, SubtitleSC, ImageSC } = useHomeCardStyles();

export default React.memo(HomeCard);
