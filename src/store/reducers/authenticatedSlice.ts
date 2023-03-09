/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { type ICheckoutForm, type IOffer, type ISubscription } from "@types";
import { ApiClient } from "services/singleton";
import { type RootState } from "store/application-store";

interface AuthenticatedState {
  offers: IOffer[] | IOffer;
  subscriptions: ISubscription[] | ISubscription;
  formFields: ICheckoutForm;
  isFormFilled: boolean;
  isLoading: boolean;
}

const initialState: AuthenticatedState = {
  offers: [],
  subscriptions: [],
  formFields: {
    creditCardNumber: "",
    cvv: "",
    validityDate: "",
    printedName: "",
    cpf: "",
    installments: 0,
  },
  isFormFilled: false,
  isLoading: false,
};

export const fetchOffers = createAsyncThunk("offers/fetchAll", async () => {
  const response = await ApiClient.getInstance().getOffers();
  return response;
});

export const fetchSubscriptions = createAsyncThunk(
  "subscriptions/fetchAll",
  async () => {
    const response = await ApiClient.getInstance().getSubscriptions();
    return response;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchOffers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchOffers.fulfilled,
      (state, action: PayloadAction<IOffer[]>) => {
        state.offers = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchSubscriptions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchSubscriptions.fulfilled,
      (state, action: PayloadAction<ISubscription[] | ISubscription>) => {
        state.subscriptions = action.payload;
        state.isLoading = false;
      }
    );
  },
});

export const { setFormFields, toggleIsFormFilled } = authenticatedSlice.actions;
export const selectAuthenticated = (state: RootState) => state.authenticated;
export default authenticatedSlice.reducer;
