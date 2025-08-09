import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState, AppStore } from "../store";

export interface ModalState {
  isOpened: boolean;
  isConfirmed: boolean;
  isDeclined: boolean;
  modalType: string;
  modalProps: any;
  modalResponse: any;
}

export interface ThunkExtraArguments {
  store: AppStore;
}

const initialModalState: ModalState = {
  isOpened: false,
  isConfirmed: false,
  isDeclined: false,
  modalType: "",
  modalProps: {},
  modalResponse: {},
};

export const modalThunkActions = {
  open: createAsyncThunk(
    "modal",
    async (params: { modalType: string; modalProps: any }, thunkAPI) => {
      //@ts-ignore
      const store = thunkAPI.extra.store;
      console.log(store);
      const dispatch = thunkAPI.dispatch;
      dispatch(open(params));
      return new Promise<any>((resolve) => {
        const unsubscribe = store.subscribe(() => {
          const state: AppState = store.getState();
          if (state.modalReducer.isConfirmed) {
            unsubscribe();
            resolve({
              ...state.modalReducer.modalResponse,
              isConfirmed: state.modalReducer.isConfirmed,
            });
          }
          if (state.modalReducer.isDeclined) {
            unsubscribe();
            resolve({ isConfirmed: state.modalReducer.isConfirmed });
          }
        });
      });
    }
  ),
  confirm: createAsyncThunk("modal", async (params: any, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    dispatch(confirm(params));
  }),
  decline: createAsyncThunk("modal", async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    dispatch(decline());
  }),
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    open: (
      state,
      action: PayloadAction<{ modalType: string; modalProps: any }>
    ) => {
      state.modalType = action.payload.modalType;
      state.modalProps = action.payload.modalProps;
      state.isOpened = true;
      state.isDeclined = false;
      state.isConfirmed = false;
    },
    confirm: (state, action: PayloadAction<{ [key: string]: any }>) => {
      state.modalResponse = action.payload;
      state.isConfirmed = true;
      state.isOpened = false;
    },
    decline: (state) => {
      state.isDeclined = true;
      state.isOpened = false;
    },
  },
});

// export const selectModal = (state: AppState) => {
//   return {
//     isOpened: state.modalReducer.isOpened,
//     isDeclined: state.modalReducer.isDeclined,
//     isConfirmed: state.modalReducer.isConfirmed,
//     modalProps: state.modalReducer.modalProps,
//     modalType: state.modalReducer.modalType,
//   };
// };

export const { open, confirm, decline } = modalSlice.actions;
