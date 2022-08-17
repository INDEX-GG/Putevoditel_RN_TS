import React from "react";
import PageContainer from "../../../AnyPage/PageContainer/PageContainer";
import { SECONDARY_COLOR } from "../../../../lib/constants/constantsColors";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useUserAuthStyles } from "./styles";
import LogoIcon from "../../../../assets/icon/Logo.svg";
import { useUserStore } from "../../../../hooks/useUserStore";
import RalewayTextSC from "../../../../UI/RalewayTextSC/RalewayTextSC";
import { uesPersonalDataScreenStyles } from "../../Auth/AuthScreens/PersonalDataScreen/styles";
import MontserratTextSC from "../../../../UI/MontserratTextSC/MontserratTextSC";
import {
  getNormalDate,
  getNormalGender,
} from "../../../../lib/services/services";
import TouchableButtonUI from "../../../../UI/TouchableButtonUI/TouchableButtonUI";
import PencilIcon from "../../../../assets/icon/Pencil.svg";

const UserAuth = () => {
  const { user } = useUserStore();
  return (
    <PageContainer
      isSafeAreaView={true}
      backgroundColor={SECONDARY_COLOR}
      paddingTop={0}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
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
              {getNormalDate(user.birthday)}
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
            text="Редактировать"
            Icon={PencilIcon}
            style={styles.editButtonStyle}
          />
          <TouchableOpacity style={styles.exitButton} activeOpacity={0.7}>
            <MontserratTextSC style={styles.exitButtonText} fontWeight={600}>
              Выйти из аккаунта
            </MontserratTextSC>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </PageContainer>
  );
};

const { styles, DefaultFieldBlockSC } = useUserAuthStyles();
const stylesPersonalData = uesPersonalDataScreenStyles();

export default React.memo(UserAuth);
