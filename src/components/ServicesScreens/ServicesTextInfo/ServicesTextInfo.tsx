import React from "react";
import { SafeAreaView, ScrollView, Share, View } from "react-native";
import ServicesHeader from "../ServicesHeader/ServicesHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ServicesStackParams } from "../../../screens/types";
import { useServicesTextInfoStyles } from "./style";
import TouchableButtonUI from "../../../UI/TouchableButtonUI/TouchableButtonUI";
import ButtonIcon from "../../../assets/icon/GetServicesIcon.svg";
import { ISpecialistModel } from "../../../lib/models/ISpecialistData";
import ScreenContainer from "../../AnyPage/ScreenContainer/ScreenContainer";
import { useChangeBottomTab } from "../../../hooks/useChangeBottomTab";
import DownloadIcon from "../../../assets/icon/DownloadIcon.svg";
import { useOrientationStore } from "../../../hooks/useOrientationStore";
import { useDownloadFile } from "../../../hooks/useDownloadFile";
import UploadIcon from "../../../assets/icon/UploadIcon.svg";

type Props = NativeStackScreenProps<ServicesStackParams, "ServicesTextInfo">;

const ServicesTextInfo = ({ navigation, route }: Props) => {
  const { title, description, file, specialistData } = route.params;
  useChangeBottomTab({ isView: false });

  const { SCREEN_WIDTH, SCREEN_HEIGHT } = useOrientationStore();

  const handleSpecialistList = () => {
    navigation.navigate(
      "ServicesSpecialists",
      specialistData as ISpecialistModel,
    );
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Название услуги:\n${title}\n\nОписание услуги:\n${description}`,
      });
    } catch (e) {
      throw new Error("Ошибка при попытки поделиться");
    }
  };

  const { handleViewDocx, handleDownloadDocx, handleDownloadDocxEmpty } =
    useDownloadFile();

  return (
    <ScreenContainer
      isScroll={false}
      isSafeAreaView={false}
      backgroundColor={"red"}
      viewProp={{
        style: {
          ...styles.container,
          height: SCREEN_HEIGHT,
        },
      }}>
      <View style={styles.infoContainer}>
        <SafeAreaView>
          <ScrollView stickyHeaderIndices={[0]} style={styles.scrollContainer}>
            <View style={styles.header}>
              <ServicesHeader
                title={title}
                paddingLeft={0}
                onPressShare={handleShare}>
                <View>
                  <UploadIcon />
                </View>
              </ServicesHeader>
            </View>
            <DescriptionSC fontWeight={400}>{description}</DescriptionSC>
          </ScrollView>
        </SafeAreaView>
      </View>
      <View style={styles.bottomContainer}>
        {specialistData ? (
          <View style={styles.buttonContainer}>
            <TouchableButtonUI
              text="Получить услугу"
              Icon={ButtonIcon}
              onPress={handleSpecialistList}
            />
          </View>
        ) : null}
        {file ? (
          <View
            style={{
              ...styles.buttonFileContainer,
              maxWidth: SCREEN_WIDTH - 44,
            }}>
            <TouchableButtonUI
              text="Посмотреть документ"
              Icon={ButtonIcon}
              flexGrowText={1}
              style={styles.viewDocButton}
              onPress={handleViewDocx}
            />
            <TouchableButtonUI
              text="Скачать заполненный документ"
              Icon={DownloadIcon}
              flexGrowText={1}
              style={styles.downloadButton}
              onPress={handleDownloadDocx}
            />
            <TouchableButtonUI
              text="Скачать пустой документ"
              Icon={DownloadIcon}
              flexGrowText={1}
              style={styles.downloadDefault}
              onPress={handleDownloadDocxEmpty}
            />
          </View>
        ) : null}
      </View>
    </ScreenContainer>
  );
};

const { styles, DescriptionSC } = useServicesTextInfoStyles();

export default React.memo(ServicesTextInfo);
