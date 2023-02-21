import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, User } from "./types";

const initialState: UserState = {
  name: "",
  password: "",
  isLogged: false,
  tokken: "",
  id: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginuser: (initialState, action: PayloadAction<User>) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const userReducer = userSlice.reducer;
export const { loginuser: loginuserActionCreator } = userSlice.actions;
