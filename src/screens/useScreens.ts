import HomeScreenIcon from "../assets/icon/HomeIcon.svg";
import HomeScreenActiveIcon from "../assets/icon/ActiveHomeIcon.svg";
import ServicesScreenIcon from "../assets/icon/Services.svg";
import ServicesScreenActiveIcon from "../assets/icon/AcitveServices.svg";
import ProfileScreenIcon from "../assets/icon/Profile.svg";
import ProfileScreenActiveIcon from "../assets/icon/ActiveProfile.svg";
import { useState } from "react";
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
} from "@react-navigation/native";
import { RootStackParamsList } from "./types";

const hiddenBottomTabArray = ["ServicesTextInfo", "About"];

export const useScreens = () => {
  const [isVisibleBottomTab, setIsVisibleBottomTab] = useState<boolean>(true);

  const handleChangeVisibleBottomTab = (
    route:
      | RouteProp<RootStackParamsList, "ServicesStack">
      | RouteProp<RootStackParamsList, "ProfileStack">,
  ) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (hiddenBottomTabArray.find((item) => item === routeName)) {
      setIsVisibleBottomTab(false);
      return;
    }
    if (!isVisibleBottomTab) setIsVisibleBottomTab(true);
  };

  return {
    isVisibleBottomTab,
    HomeScreenIcon,
    HomeScreenActiveIcon,
    ServicesScreenIcon,
    ServicesScreenActiveIcon,
    ProfileScreenIcon,
    ProfileScreenActiveIcon,
    handleChangeVisibleBottomTab,
  };
};
