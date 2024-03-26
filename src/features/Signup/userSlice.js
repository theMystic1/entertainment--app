import { createSlice } from "@reduxjs/toolkit";

const FAKE_USER = {
  email: "testing@gmail.mail",
  password: "curiosity",
};

const initialState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      // Here you would typically authenticate the user with provided credentials
      const { email, password } = action.payload;
      if (email === FAKE_USER.email && password === FAKE_USER.password) {
        state.user = { email };
        state.isAuthenticated = true;
      } else {
        // Throw an error if the credentials are incorrect
        throw new Error("Invalid email or password");
      }
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
    signup(state, action) {
      // Here you would typically register the user with provided credentials
      const { email, password } = action.payload;
      state.user = { email, password };
      state.isAuthenticated = true;
    },
    setAuthStatus(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { login, logout, signup, setAuthStatus } = userSlice.actions;

export default userSlice.reducer;

export const isAuthenticated = (state) => state.user.isAuthenticated;
