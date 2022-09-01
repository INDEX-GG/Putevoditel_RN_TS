import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import ServicesHeader from "../ServicesHeader/ServicesHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ServicesStackParams } from "../../../screens/types";
import { useServicesTextInfoStyles } from "./style";
import TouchableButtonUI from "../../../UI/TouchableButtonUI/TouchableButtonUI";
import ButtonIcon from "../../../assets/icon/GetServicesIcon.svg";
import { ISpecialistModel } from "../../../lib/models/ISpecialistData";
import ScreenContainer from "../../AnyPage/ScreenContainer/ScreenContainer";
import DownloadIcon from "../../../assets/icon/DownloadIcon.svg";
import { useOrientationStore } from "../../../hooks/useOrientationStore";
import { useDownloadFile } from "../../../hooks/useDownloadFile";
import UploadIcon from "../../../assets/icon/UploadIcon.svg";
import { useServicesTextInfo } from "./useServicesTextInfo";
import { useUserStore } from "../../../hooks/useUserStore";
import { IS_IOS } from "../../../lib/constants/constants";
import MontserratTextSC from "../../../UI/MontserratTextSC/MontserratTextSC";

type Props = NativeStackScreenProps<ServicesStackParams, "ServicesTextInfo">;

const ServicesTextInfo = ({ navigation, route }: Props) => {
  const { title, description, file, specialistData } = route.params;
  const { isAuth } = useUserStore();
  const { SCREEN_HEIGHT } = useOrientationStore();
  const { handleDownloadDocx, handleDownloadDocxEmpty } = useDownloadFile();
  const { handleShare } = useServicesTextInfo();
  const { styles } = useServicesTextInfoStyles();

  const handleSpecialistList = () => {
    navigation.navigate(
      "ServicesSpecialists",
      specialistData as ISpecialistModel,
    );
  };
  return (
    <ScreenContainer
      isScroll={false}
      isSafeAreaView={false}
      backgroundColor={"red"}
      viewProp={{
        style: IS_IOS
          ? {
              ...styles.container,
              height: SCREEN_HEIGHT,
            }
          : styles.container,
      }}>
      <View style={styles.infoContainer}>
        <SafeAreaView>
          <ScrollView stickyHeaderIndices={[0]} style={styles.scrollContainer}>
            <View style={styles.header}>
              <ServicesHeader
                title={title}
                paddingLeft={0}
                onPressShare={handleShare(title, description)}>
                <View>
                  <UploadIcon />
                </View>
              </ServicesHeader>
            </View>
            <MontserratTextSC style={styles.description} fontWeight={400}>
              {description}
            </MontserratTextSC>
          </ScrollView>
        </SafeAreaView>
      </View>
      <View style={styles.bottomContainer}>
        {specialistData ? (
          <View style={styles.buttonContainer}>
            <TouchableButtonUI
              text="Получить услугу"
              style={{ height: 50, paddingVertical: 0, paddingRight: 22 }}
              Icon={ButtonIcon}
              onPress={handleSpecialistList}
            />
          </View>
        ) : null}
        {file ? (
          <View
            style={{
              ...styles.buttonFileContainer,
            }}>
            {file.isTemplate && isAuth ? (
              <TouchableButtonUI
                text="Скачать заполненный документ"
                Icon={DownloadIcon}
                style={styles.downloadButton}
                styleText={{ style: styles.buttonStyleText }}
                onPress={handleDownloadDocx(file.url, file.fileName)}
              />
            ) : null}
            <TouchableButtonUI
              text="Скачать документ"
              Icon={DownloadIcon}
              styleText={{ style: styles.buttonStyleText }}
              style={styles.downloadDefault}
              onPress={handleDownloadDocxEmpty(file.url, file.fileName, true)}
            />
          </View>
        ) : null}
      </View>
    </ScreenContainer>
  );
};

export default React.memo(ServicesTextInfo);
