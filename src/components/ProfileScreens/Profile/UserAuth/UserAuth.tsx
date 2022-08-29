import React from "react";
import { SECONDARY_COLOR } from "../../../../lib/constants/constantsColors";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useUserAuthStyles } from "./styles";
import LogoIcon from "../../../../assets/icon/Logo.svg";
import { useUserStore } from "../../../../hooks/useUserStore";
import RalewayTextSC from "../../../../UI/RalewayTextSC/RalewayTextSC";
import { uesPersonalDataScreenStyles } from "../../Auth/AuthScreens/PersonalDataScreen/styles";
import MontserratTextSC from "../../../../UI/MontserratTextSC/MontserratTextSC";
import { getNormalGender } from "../../../../lib/services/services";
import TouchableButtonUI from "../../../../UI/TouchableButtonUI/TouchableButtonUI";
import PencilIcon from "../../../../assets/icon/Pencil.svg";
import AboutApp from "../../../AnyPage/AboutApp/AboutApp";
import { useModalStore } from "../../../../hooks/useModalStore";
import ScreenContainer from "../../../AnyPage/ScreenContainer/ScreenContainer";

interface IUserAuthProps {
  handlePressEditProfile: () => void;
}

const UserAuth = ({ handlePressEditProfile }: IUserAuthProps) => {
  const { user } = useUserStore();
  const { handleOpenModal } = useModalStore();
  return (
    <ScreenContainer
      isScroll={false}
      isSafeAreaView={true}
      backgroundColor={SECONDARY_COLOR}
      viewProp={{ style: styles.container }}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.logoContainer}>
            <LogoIcon />
          </View>
          <View style={styles.userFIO}>
            <RalewayTextSC style={styles.userFIOText}>
              {user.patronymic}
            </RalewayTextSC>
            <RalewayTextSC style={styles.userFIOText}>
              {user.name}
            </RalewayTextSC>
            <RalewayTextSC style={styles.userFIOText}>
              {user.surname}
            </RalewayTextSC>
          </View>
          <DefaultFieldBlockSC style={styles.birthdayContainer}>
            <MontserratTextSC
              fontWeight={500}
              style={[styles.defaultInputText, { textAlign: "center" }]}>
              {user.birthday}
            </MontserratTextSC>
          </DefaultFieldBlockSC>
          <View style={styles.fieldContainer}>
            <MontserratTextSC
              fontWeight={600}
              style={stylesPersonalData.fieldsTitle}>
              Паспортные данные
            </MontserratTextSC>
            <DefaultFieldBlockSC>
              <MontserratTextSC
                fontWeight={500}
                style={styles.defaultInputText}>
                {user.passport}
              </MontserratTextSC>
            </DefaultFieldBlockSC>
          </View>
          <View style={styles.fieldContainer}>
            <MontserratTextSC
              fontWeight={600}
              style={stylesPersonalData.fieldsTitle}>
              Регистрация по месту жительства (пребывания)
            </MontserratTextSC>
            <DefaultFieldBlockSC>
              <MontserratTextSC
                fontWeight={500}
                style={styles.defaultInputText}>
                {user.address}
              </MontserratTextSC>
            </DefaultFieldBlockSC>
          </View>
          <View style={styles.fieldContainer}>
            <MontserratTextSC
              fontWeight={600}
              style={stylesPersonalData.fieldsTitle}>
              Номер телефона
            </MontserratTextSC>
            <DefaultFieldBlockSC>
              <MontserratTextSC
                fontWeight={500}
                style={styles.defaultInputText}>
                {user.phone}
              </MontserratTextSC>
            </DefaultFieldBlockSC>
          </View>
          <View style={styles.fieldContainer}>
            <MontserratTextSC
              fontWeight={600}
              style={stylesPersonalData.fieldsTitle}>
              Состав семьи
            </MontserratTextSC>
            <DefaultFieldBlockSC>
              <MontserratTextSC
                fontWeight={500}
                style={styles.defaultInputText}>
                {user.familyComposition}
              </MontserratTextSC>
            </DefaultFieldBlockSC>
          </View>
          <View style={styles.minContainer}>
            <MontserratTextSC
              fontWeight={600}
              style={[stylesPersonalData.fieldsTitle]}>
              Пол: {getNormalGender(user.gender)}
            </MontserratTextSC>
          </View>
          <TouchableButtonUI
            onPress={handlePressEditProfile}
            text="Редактировать"
            Icon={PencilIcon}
            style={styles.editButtonStyle}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.exitButton}
            onPress={() => handleOpenModal(true, "logout")}>
            <MontserratTextSC style={styles.exitButtonText} fontWeight={600}>
              Выйти из аккаунта
            </MontserratTextSC>
          </TouchableOpacity>
          <View style={styles.aboutContainer}>
            <AboutApp />
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const { styles, DefaultFieldBlockSC } = useUserAuthStyles();
const stylesPersonalData = uesPersonalDataScreenStyles();

export default React.memo(UserAuth);
