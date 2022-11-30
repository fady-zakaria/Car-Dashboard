import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {
    isLoggedIn: false,
    email: null,
    userName: null,
    userID: null,
    photoURL: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      console.log("payload", action.payload);
      const { email, userName, userID, photoURL } = action.payload;
      state.currentUser.isLoggedIn = true;
      state.currentUser.email = email;
      state.currentUser.userName = userName;
      state.currentUser.userID = userID;
      state.currentUser.photoURL = photoURL;
      localStorage.setItem("user", JSON.stringify(state.currentUser));
    },
    REMOVE_ACTIVE_USER(state, action) {
      state.currentUser.isLoggedIn = false;
      state.currentUser.email = null;
      state.currentUser.userName = null;
      state.currentUser.userID = null;
      state.currentUser.photoURL = null;
      localStorage.removeItem("user");
    },
  },
});

export const { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = authSlice.actions;

export const selectuser = (state) => state.auth.currentUser;
// export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
// export const selectEmail = (state) => state.auth.email;
// export const selectUserName = (state) => state.auth.userName;
// export const selectUserID = (state) => state.auth.userID;
// export const selectPhoto = (state) => state.auth.photoURL;

export default authSlice.reducer;
