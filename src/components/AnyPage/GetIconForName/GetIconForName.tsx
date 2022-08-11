import React from "react";
import EmailIcon from "../../../assets/icon/EmailIcon.svg";
import WalletIcon from "../../../assets/icon/WalletIcon.svg";
import ChildrenIcon from "../../../assets/icon/ChildrenIcon.svg";
import ShieldIcon from "../../../assets/icon/ShieldIcon.svg";
import HeartIcon from "../../../assets/icon/HeartIcon.svg";
import BagIcon from "../../../assets/icon/BagIcon.svg";
import ListIcon from "../../../assets/icon/ListIcon.svg";
import ShieldTwoIcon from "../../../assets/icon/ShieldTwo.svg";
import MapIcon from "../../../assets/icon/MapIcon.svg";
import { IconNames } from "../../../types/types";

interface IGetIconForNameProps {
  iconName: IconNames;
}

const GetIconForName = ({ iconName }: IGetIconForNameProps) => {
  switch (iconName) {
    case "Email":
      return <EmailIcon />;
    case "Wallet":
      return <WalletIcon />;
    case "Children":
      return <ChildrenIcon />;
    case "Shield":
      return <ShieldIcon />;
    case "ShieldTwo":
      return <ShieldTwoIcon />;
    case "Heart":
      return <HeartIcon />;
    case "Bag":
      return <BagIcon />;
    case "List":
      return <ListIcon />;
    case "Map":
      return <MapIcon />;
    default:
      return null;
  }
};

export default React.memo(GetIconForName);
