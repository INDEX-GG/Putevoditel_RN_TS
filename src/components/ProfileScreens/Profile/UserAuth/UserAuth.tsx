import React from "react";
import PageContainer from "../../../AnyPage/PageContainer/PageContainer";
import { SECONDARY_COLOR } from "../../../../lib/constants/constantsColors";
import { ScrollView, View } from "react-native";
import { useUserAuthStyles } from "./styles";
import LogoIcon from "../../../../assets/icon/Logo.svg";

const UserAuth = () => {
  return (
    <PageContainer
      isSafeAreaView={true}
      backgroundColor={SECONDARY_COLOR}
      paddingTop={0}>
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.logoContainer}>
            <LogoIcon />
          </View>
        </View>
      </ScrollView>
    </PageContainer>
  );
};

const styles = useUserAuthStyles();

export default React.memo(UserAuth);
