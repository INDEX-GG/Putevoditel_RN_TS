import { Linking, Share } from "react-native";
import { ServicesCurrentSpecialistProps } from "./types";

export const useServicesCurrentSpecialist = ({
  route,
}: ServicesCurrentSpecialistProps) => {
  const { name, department, address, phone, url } = route.params;
  const handleShareInfo = async () => {
    try {
      await Share.share({
        message: `Специалист: ${name}.\nОтдела: "${department}" находится по адрессу "${address}".\nТелефон для связи: ${phone}`,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleCallPhone = () => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleOpenMap = () => {
    if (url) {
      Linking.openURL(url);
    }
  };

  return {
    handleOpenMap,
    handleCallPhone,
    handleShareInfo,
  };
};
