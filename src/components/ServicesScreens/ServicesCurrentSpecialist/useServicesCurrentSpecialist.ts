import { Linking, Platform, Share } from "react-native";
import { ServicesCurrentSpecialistProps } from "./types";

export const useServicesCurrentSpecialist = ({
  route,
}: ServicesCurrentSpecialistProps) => {
  const { name, department, address, phone, url, geo } = route.params;
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
    if (url && geo) {
      const scheme = Platform.select({
        ios: "maps:0,0?q=",
        android: "geo:0,0?q=",
      });
      const latLng = `${geo[0]},${geo[1]}`;
      const label = "Карты";
      const url = Platform.select({
        ios: `${scheme}${label}@${latLng}`,
        android: `${scheme}${latLng}(${label})`,
      });
      Linking.openURL(url as string);
    }
  };

  return {
    handleOpenMap,
    handleCallPhone,
    handleShareInfo,
  };
};
