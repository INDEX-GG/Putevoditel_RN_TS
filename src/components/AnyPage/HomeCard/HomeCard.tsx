import React from "react";
import { IHomeServicesModel } from "../../../lib/models/IHomeServicesModel";
import { useHomeCardStyles } from "./style";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../../../screens/types";

interface IHomeCardProps extends IHomeServicesModel {
  isLastElement: boolean;
}

const HomeCard = ({
  title,
  photo,
  isLastElement,
  redirectData,
  redirectTitle,
  description,
  backgroundColor,
}: IHomeCardProps) => {
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
      onPress={handlePush}
      isLastElement={isLastElement}>
      <TitleSC>{title}</TitleSC>
      <SubtitleSC fontWeight={400}>{description}</SubtitleSC>
      <ImageSC
        source={photo.uri}
        style={{ width: photo.width, height: photo.height }}
        width={photo.width}
        height={photo.height}
      />
    </ContainerSC>
  );
};

const { ContainerSC, TitleSC, SubtitleSC, ImageSC } = useHomeCardStyles();

export default React.memo(HomeCard);
