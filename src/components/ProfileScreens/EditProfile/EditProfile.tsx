import React from "react";
import { ProfileStackParams } from "../../../screens/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import PersonalDataScreen from "../Auth/AuthScreens/PersonalDataScreen/PersonalDataScreen";
import { INewRegisterUserData } from "../../../store/reducers/authSlice/asyncThunk/types";
import { useUserStore } from "../../../hooks/useUserStore";
import { TypeGetUserKeyUnion } from "../../../lib/models/IUserModel";
import { useModalStore } from "../../../hooks/useModalStore";

type Props = NativeStackScreenProps<ProfileStackParams, "ProfileEdit">;

const EditProfile = ({ navigation }: Props) => {
  const { user, handleUpdateUser } = useUserStore();
  const { handleOpenModal } = useModalStore();

  const handleFulfilledUpdateData = () => {
    handleOpenModal(false, null);
    navigation.goBack();
  };

  const handleEditFieldUser = (data: INewRegisterUserData) => {
    const { setError, ...fieldsData } = data;
    const updateFields = {} as { [key: string]: string };
    if (typeof fieldsData === "object") {
      for (const [key, value] of Object.entries(fieldsData)) {
        const userValue = user[key as TypeGetUserKeyUnion];
        if (userValue !== value) {
          updateFields[key] = value;
        }
      }
    }
    const lengthEditFields = Object.keys(updateFields).length;
    if (lengthEditFields) {
      handleOpenModal(true, "loading");
      const handleRejectUpdateData = (message?: string) => {
        setError(message || "");
        handleOpenModal(false, null);
      };

      handleUpdateUser({
        ...updateFields,
        fulfilledCallback: handleFulfilledUpdateData,
        rejectCallback: handleRejectUpdateData,
      });
      return;
    }
    navigation.goBack();
  };

  return (
    <PersonalDataScreen
      isEdit={true}
      handlePressBack={() => navigation.goBack()}
      handleRegisterUser={handleEditFieldUser}
    />
  );
};

export default React.memo(EditProfile);
