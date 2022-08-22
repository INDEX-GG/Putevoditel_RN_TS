import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ServicesStackParams } from "../../../screens/types";
import PageContainer from "../../AnyPage/PageContainer/PageContainer";
import { SCREEN_HEIGHT } from "../../../lib/constants/constants";
import { SECONDARY_COLOR } from "../../../lib/constants/constantsColors";
import ServicesHeader from "../ServicesHeader/ServicesHeader";
import SharingIcon from "../../../assets/icon/SharingIcon.svg";

type Props = NativeStackScreenProps<
  ServicesStackParams,
  "ServicesCurrentSpecialist"
>;

const ServicesCurrentSpecialist = ({ navigation, route }: Props) => {
  return (
    <PageContainer
      isSafeAreaView={true}
      paddingTop={0}
      height={`${SCREEN_HEIGHT}`}
      backgroundColor={SECONDARY_COLOR}>
      <ScrollView>
        <View style={styles.headerWrapper}>
          <ServicesHeader title="Специалисты " />
          <TouchableOpacity style={styles.sharingIcon}>
            <SharingIcon />
          </TouchableOpacity>
        </View>
        <View></View>
      </ScrollView>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    paddingHorizontal: 33,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 29,
  },
  sharingIcon: {
    width: 50,
    height: 30,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default React.memo(ServicesCurrentSpecialist);
