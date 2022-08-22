import React from "react";
import { TouchableOpacity, View } from "react-native";
import { IServiceItemModel } from "../../../lib/models/IServiceItemModel";
import ArrowRight from "../../../assets/icon/ArrowRight.svg";
import GetIconForName from "../GetIconForName/GetIconForName";
import { PushServiceInnerType } from "../../../types/types";
import { ServicesItemStyles } from "./styles";
import MontserratTextSC from "../../../UI/MontserratTextSC/MontserratTextSC";

interface IServicesItemProps extends IServiceItemModel {
  handePush: PushServiceInnerType;
}

const ServicesItem = ({
  title,
  iconName,
  children,
  handePush,
}: IServicesItemProps) => {
  const handlePress = () => handePush(title, children)();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={handlePress}>
      {iconName ? (
        <View style={styles.dynamicIcon}>
          <GetIconForName iconName={iconName} />
        </View>
      ) : null}
      <MontserratTextSC fontWeight={600} style={styles.text}>
        {title}
      </MontserratTextSC>
      <View style={styles.iconArrow}>{children ? <ArrowRight /> : null}</View>
    </TouchableOpacity>
  );
};

const { styles } = ServicesItemStyles();

export default React.memo(ServicesItem);
