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

const hiddenBottomTabArrayServices = ["ServicesTextInfo"];
const hiddenBottomTabArrayProfile = ["About"];

export const useScreens = () => {
  const [isVisibleBottomTab, setIsVisibleBottomTab] = useState<boolean>(true);

  const handleChangeVisibleBottomTab = (
    route:
      | RouteProp<RootStackParamsList, "ServicesStack">
      | RouteProp<RootStackParamsList, "ProfileStack">,
    stackName: "Service" | "Profile",
  ) => {
    let array: string[] = [];
    switch (stackName) {
      case "Profile":
        array = hiddenBottomTabArrayProfile;
        break;
      case "Service":
        array = hiddenBottomTabArrayServices;
        break;
    }
    const routeName = getFocusedRouteNameFromRoute(route);
    const findItem = array.find((item) => item === routeName);
    if (findItem) {
      setIsVisibleBottomTab(false);
      return;
    } else {
      if (routeName) {
        setIsVisibleBottomTab(true);
      }
    }
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
