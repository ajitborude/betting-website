import { fetcher } from "@/helper/fetcher";
import {
  getUserResponse,
  googleLoginParams,
  googleLoginResponse,
  loginParams,
  metamaskLoginParams,
  metamaskLoginResponse,
  metamaskSignatureParams,
  metamaskSignatureResponse,
  registerParams,
} from "@/types/auth";
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";

export const login = createAsyncThunk(
  "auth/login",
  async (_credentials: loginParams, thunkAPI) => {
    try {
      // const authResp: loginResponse = await fetcher.post(
      //   `auth/login`,
      //   credentials
      // );
      // const userResp: getUserResponse = await fetcher.get(`user`, {
      //   headers: { Authorization: `Bearer ${authResp.authToken}` },
      // });
      return {
        authToken: "sample-token",
        user: { name: "Sample User", email: "sample.user@mailinator.cc" },
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({
        error: error ? error.message : "Something Went Wrong",
      });
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (_credentials: registerParams, thunkAPI) => {
    try {
      // const authResp: registerResponse = await fetcher.post(
      //   `auth/register`,
      //   credentials
      // );
      // const userResp: getUserResponse = await fetcher.get(`user`, {
      //   headers: { Authorization: `Bearer ${authResp.authToken}` },
      // });
      return {
        authToken: "sample-token",
        user: { name: "Sample User", email: "sample.user@mailinator.cc" },
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const fetchUser = createAsyncThunk(
  "user",
  async (_, { getState, rejectWithValue }) => {
    try {
      //@ts-ignore
      const token = (getState() as AppState).authReducer.authToken;
      const userResp: getUserResponse = await fetcher.get(`user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTimeout;
      return userResp;
    } catch (error: any) {
      return rejectWithValue({ error: error.message });
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, _thunkAPI) => {
  return true;
  // try {
  //   const token = (getState() as AppState).authReducer.authToken;
  //   const response = await fetcher.delete("auth/logout", {
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  //   return response.data;
  // } catch (error: any) {
  //   return rejectWithValue({ error: error.message });
  // }
});

export const metamaskLogin = createAsyncThunk(
  "auth/metamask",
  async (credentials: metamaskLoginParams, thunkAPI) => {
    try {
      const nonceResp: metamaskLoginResponse = await fetcher.post(
        `auth/metamask`,
        credentials
      );
      return nonceResp;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const metamaskVerify = createAsyncThunk(
  "auth/metamask-verify",
  async (credentials: metamaskSignatureParams, thunkAPI) => {
    try {
      const authResp: metamaskSignatureResponse = await fetcher.post(
        `auth/metamask/verify`,
        credentials
      );
      const userResp: any = await fetcher.get(`user`, {
        headers: { Authorization: `Bearer ${authResp.authToken}` },
      });
      return {
        authToken: authResp.authToken,
        user: { address: userResp.address },
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const googleLogin = createAsyncThunk(
  "auth/google",
  async (params: googleLoginParams, thunkAPI) => {
    try {
      const authResp: googleLoginResponse = await fetcher.post(
        `auth/googleLogin`,
        { code: params.code }
      );
      const userResp: getUserResponse = await fetcher.get(`user`, {
        headers: { Authorization: `Bearer ${authResp.authToken}` },
      });
      return {
        authToken: authResp.authToken,
        user: { name: userResp.name, email: userResp.email },
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export interface AuthSliceState {
  authToken: string;
  loading: boolean;
  isAuthorized: boolean;
  user?: {
    name?: string;
    email?: string;
  };
  error?: SerializedError;
  nonce?: string;
}

const internalInitialState = {
  authToken: "",
  isAuthorized: false,
  loading: false,
  user: {},
  error: null,
  nonce: "",
};

export const authSlice: any = createSlice({
  name: "auth",
  initialState: internalInitialState,
  reducers: {
    updateTokens(state, action: PayloadAction<{ authToken: string }>) {
      state.authToken = action.payload.authToken;
    },
    reset: () => internalInitialState,
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      //@ts-ignore
      return Object.assign({}, state, { ...action.payload.authReducer });
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.authToken = action.payload.authToken;
      state.isAuthorized = true;
      state.user = action.payload.user;
      state.loading = false;
    });
    builder.addCase(login.rejected, (_state, action) => {
      //@ts-ignore
      return Object.assign(Object.assign({}, internalInitialState), {
        error: action.payload,
      });

      // state = { ...internalInitialState, error: action.error };
      // throw new Error(action.error.message);
    });

    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.authToken = action.payload.authToken;
      state.isAuthorized = true;
      state.user = action.payload.user;
      state.loading = false;
    });
    builder.addCase(register.rejected, (_state, action) => {
      //@ts-ignore
      return Object.assign(Object.assign({}, internalInitialState), {
        error: action.payload,
      });
    });

    builder.addCase(googleLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(googleLogin.fulfilled, (state, action) => {
      // console.log(action);
      state.authToken = action.payload.authToken;
      state.isAuthorized = true;
      state.user = action.payload.user;
      state.loading = false;
    });
    builder.addCase(googleLogin.rejected, (_state, action) => {
      //@ts-ignore
      return Object.assign(Object.assign({}, internalInitialState), {
        error: action.payload,
      });
    });

    builder.addCase(logout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (_state) => internalInitialState);
    builder.addCase(fetchUser.rejected, (_state, action) => {
      //@ts-ignore
      state = { ...internalInitialState, error: action.error };
      throw new Error(action.error.message);
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      //@ts-ignore
      state.user = action.payload.data;
    });
    builder.addCase(metamaskLogin.pending, (_state) => {
      // state.loading = true;
    });
    builder.addCase(metamaskLogin.fulfilled, (state, action) => {
      state.nonce = action.payload.nonce;
    });
    //@ts-ignore
    builder.addCase(metamaskLogin.rejected, (state, action) => {
      //@ts-ignore
      state = { ...internalInitialState, error: action.error };
      // throw new Error(action.error.message);
    });
    builder.addCase(metamaskVerify.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(metamaskVerify.fulfilled, (state, action) => {
      state.authToken = action.payload.authToken;
      state.isAuthorized = true;
      state.user = action.payload.user;
      state.loading = false;
    });
    //@ts-ignore
    builder.addCase(metamaskVerify.rejected, (state, action) => {
      //@ts-ignore
      state = { ...internalInitialState, error: action.error };
      // throw new Error(action.error.message);
    });
  },
});

export const selectAuthLoading = (state: AppState) => {
  //@ts-ignore
  return state.authReducer.loading;
};

export const selectIsAuthorized = (state: AppState) => {
  //@ts-ignore
  return state.authReducer.isAuthorized;
};

export const selectUser = (state: AppState) => {
  //@ts-ignore
  return state.authReducer.user;
};

export const { updateTokens, reset } = authSlice.actions;
