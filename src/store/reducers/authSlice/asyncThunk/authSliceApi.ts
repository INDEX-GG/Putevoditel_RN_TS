import { createAsyncThunk } from "@reduxjs/toolkit";
import { IStore } from "../../../../types/types";

export type ICheckRegistration = {
  email: string;
  fulfilledCallback: () => void;
  rejectCallback: () => void;
};
export type ICheckRegistrationResponse = { emailRegistration: boolean };

export const fetchCheckRegistration = createAsyncThunk<
  ICheckRegistrationResponse,
  ICheckRegistration,
  IStore
>(
  "authSlice/checkUser",
  async ({ email, rejectCallback, fulfilledCallback }, { extra: api }) => {
    const response = await api.get<ICheckRegistrationResponse>(
      `/api/v1/email/checkRegistration/${email}`,
    );
    console.log(response);
    if (response.data.emailRegistration) {
      fulfilledCallback();
    } else {
      rejectCallback();
    }
    return response.data;
  },
);
