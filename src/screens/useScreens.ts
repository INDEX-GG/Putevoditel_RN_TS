import HomeScreenIcon from "../assets/icon/HomeIcon.svg";
import ServicesScreenIcon from "../assets/icon/Services.svg";
import ProfileScreenIcon from "../assets/icon/Profile.svg";
import { useState } from "react";
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
} from "@react-navigation/native";
import { RootStackParamsList } from "./types";

const hiddenBottomTabArray = ["ServicesTextInfo"];

export const useScreens = () => {
  const [isVisibleBottomTab, setIsVisibleBottomTab] = useState<boolean>(true);

  const handleChangeVisibleBottomTab = (
    route: RouteProp<RootStackParamsList, "ServicesStack">,
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
    ServicesScreenIcon,
    ProfileScreenIcon,
    handleChangeVisibleBottomTab,
  };
};
