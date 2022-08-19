import React from "react";
import PageContainer from "../../AnyPage/PageContainer/PageContainer";
import AuthHeader from "../Auth/AuthHeader/AuthHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../../screens/types";

type Props = NativeStackScreenProps<ProfileStackParams, "About">;

const About = ({ navigation }: Props) => {
  return (
    <PageContainer isSafeAreaView={true} paddingTop={0}>
      <AuthHeader
        title="О приложении"
        handlePressBack={() => navigation.goBack()}
      />
    </PageContainer>
  );
};

export default React.memo(About);
