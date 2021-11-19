import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const LOGIN_URL = "https://node-api-proxy-alkemy.herokuapp.com/";
const LOGIN_URL = "http://challenge-react.alkemy.org";

const user = localStorage.getItem("USER_TOKEN");

const initialState = {
  status: "idle",
  error: "",
  token: user || "",
};

export const logIn = createAsyncThunk("user/logIn", async (data) => {
  try {
    const response = await axios.post(LOGIN_URL, {
      email: data.email,
      password: data.password,
    });

    const respData = response.data;
    localStorage.setItem("USER_TOKEN", respData.token);
    console.log("Logged in!");
    return respData;
  } catch ({ response }) {
    console.log(response.data.error);
    throw response;
  }
});
export const logOut = () => (dispatch) => {
  localStorage.removeItem("USER_TOKEN");
  dispatch(loggedOut());
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedOut: (state) => {
      state = {
        status: "idle",
        error: "",
        token: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.status = "idle";
        state.error = "";
        state.token = action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.status = "idle";
        state.error = "Error while login";
      });
  },
});

export const selectToken = (state) => state.user.token;
export const selectStatus = (state) => state.user.status;

export const { loggedOut } = userSlice.actions;

export default userSlice.reducer;
