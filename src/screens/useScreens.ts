import HomeScreenIcon from "../assets/icon/HomeIcon.svg";
import HomeScreenActiveIcon from "../assets/icon/ActiveHomeIcon.svg";
import ServicesScreenIcon from "../assets/icon/Services.svg";
import ServicesScreenActiveIcon from "../assets/icon/AcitveServices.svg";
import ProfileScreenIcon from "../assets/icon/Profile.svg";
import ProfileScreenActiveIcon from "../assets/icon/ActiveProfile.svg";
import { useModalStore } from "../hooks/useModalStore";

export const useScreens = () => {
  const { isVisibleBottomTab } = useModalStore();

  return {
    isVisibleBottomTab,
    HomeScreenIcon,
    HomeScreenActiveIcon,
    ServicesScreenIcon,
    ServicesScreenActiveIcon,
    ProfileScreenIcon,
    ProfileScreenActiveIcon,
  };
};
