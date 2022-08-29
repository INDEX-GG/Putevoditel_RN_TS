import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ServicesStackParams } from "../../../screens/types";
import { FlatList, StyleSheet, View } from "react-native";
import ServicesHeader from "../ServicesHeader/ServicesHeader";
import MontserratTextSC from "../../../UI/MontserratTextSC/MontserratTextSC";
import { COLOR_BLACK_TWO } from "../../../lib/constants/constantsColors";
import SpecialistItem from "./SpecialistItem/SpecialistItem";
import { SCREEN_HEIGHT } from "../../../lib/constants/constants";
import { ISpecialistPersonalData } from "../../../lib/models/ISpecialistData";
import ScreenContainer from "../../AnyPage/ScreenContainer/ScreenContainer";

type Props = NativeStackScreenProps<ServicesStackParams, "ServicesSpecialists">;

const ServicesSpecialists = ({ navigation, route }: Props) => {
  const { specialistData, ...otherSpecialistData } = route.params;
  const handleOpenSpecialistScreen = (data: ISpecialistPersonalData) => {
    return () => {
      navigation.navigate("ServicesCurrentSpecialist", {
        ...otherSpecialistData,
        ...data,
      });
    };
  };

  return (
    <ScreenContainer isScroll={false}>
      <FlatList
        contentContainerStyle={{
          height: SCREEN_HEIGHT - 110,
          paddingHorizontal: 33,
        }}
        ListHeaderComponent={() => (
          <View>
            <ServicesHeader title="Специалисты " />
            <MontserratTextSC fontWeight={600} style={styles.pageTitle}>
              Список специалистов
            </MontserratTextSC>
          </View>
        )}
        data={specialistData}
        renderItem={({ item, index }) => (
          <SpecialistItem
            key={`${item.name}${index}`}
            {...item}
            handleOpenSpecialistScreen={handleOpenSpecialistScreen}
          />
        )}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 33,
  },
  pageTitle: {
    color: COLOR_BLACK_TWO,
    marginTop: 41,
    marginBottom: 12,
    paddingHorizontal: 3,
  },
  wrapper: {
    paddingHorizontal: 3,
  },
});

export default React.memo(ServicesSpecialists);
