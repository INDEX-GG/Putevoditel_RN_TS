import { useChangeBottomTab } from "../../../hooks/useChangeBottomTab";
import { Share } from "react-native";

export const useServicesTextInfo = () => {
  useChangeBottomTab({ isView: false });

  const handleShare = (title: string, description: string) => {
    return async () => {
      try {
        await Share.share({
          message: `Название услуги:\n${title}\n\nОписание услуги:\n${description}`,
        });
      } catch (e) {
        throw new Error("Ошибка при попытки поделиться");
      }
    };
  };

  return {
    handleShare,
  };
};
