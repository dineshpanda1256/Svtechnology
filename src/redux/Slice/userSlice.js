import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    logout(state, action) {
      state.userInfo = {};
      state.token = "";
    },
  },
});

export const { logout, setToken, setUserInfo } = userSlice.actions;
export default userSlice.reducer;
