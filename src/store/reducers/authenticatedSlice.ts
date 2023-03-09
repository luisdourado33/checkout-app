/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type ICheckoutForm } from "@types";
import { type RootState } from "store/application-store";

interface AuthenticatedState {
  formFields: ICheckoutForm;
  isFormFilled: boolean;
}

const initialState: AuthenticatedState = {
  formFields: {
    creditCardNumber: "",
    cvv: "",
    validityDate: "",
    printedName: "",
    cpf: "",
    installments: 0,
  },
  isFormFilled: false,
};

export const authenticatedSlice = createSlice({
  name: "authenticated",
  initialState,
  reducers: {
    setFormFields: (state, action: PayloadAction<ICheckoutForm>) => {
      state.formFields = action.payload;
    },
    toggleIsFormFilled: (state) => {
      state.isFormFilled = !state.isFormFilled;

      if (!state.isFormFilled) {
        state.formFields = initialState.formFields;
      }
    },
  },
});

export const { setFormFields, toggleIsFormFilled } = authenticatedSlice.actions;
export const selectAuthenticated = (state: RootState) => state.authenticated;
export default authenticatedSlice.reducer;
