import {
  configureStore,
  combineReducers,
  AnyAction,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { modalSlice, ThunkExtraArguments } from "./slices/modal";
import { authSlice } from "./slices/auth";
import { RESET_STATE_ACTION_TYPE } from "./actions/reset";

import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from "next-redux-cookie-wrapper";

const combinedReducers = combineReducers({
  authReducer: authSlice.reducer,
  modalReducer: modalSlice.reducer,
});

const rootReducer = (
  state: ReturnType<typeof combinedReducers>,
  action: AnyAction
) => {
  if (action.type === RESET_STATE_ACTION_TYPE) state = {} as AppState;
  return combinedReducers(state, action);
  // }
};

// For store subscribe in modalSlice
const thunkArguments = {} as ThunkExtraArguments;

const makeStore = () =>
  configureStore({
    // @ts-ignore
    reducer: rootReducer,
    // @ts-ignore
    middleware: (gDM) =>
      gDM({
        thunk: {
          extraArgument: thunkArguments,
        },
      })
        .prepend(
          nextReduxCookieMiddleware({
            subtrees: ["authReducer"],
          })
        )
        .concat(),
    devTools: true,
  });

thunkArguments.store = makeStore();

const wrappedMakeStore = wrapMakeStore(makeStore);

export const wrapper = createWrapper<AppStore>(wrappedMakeStore, {
  debug: false,
});

export type AppStore = ReturnType<typeof makeStore>;

export type AppDispatch = AppStore["dispatch"];

export type AppState = ReturnType<AppStore["getState"]>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
