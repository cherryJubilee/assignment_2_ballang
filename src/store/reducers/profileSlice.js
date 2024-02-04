import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {
      nickname: "",
      age: "",
      preferenceStyle: "",
    },
  },
  reducers: {
    setProfile(state, action) {
      state.profile = { ...state.profile, ...action.payload };
    },
  },
});

export const { setProfile } = userSlice.actions;
export default userSlice.reducer;
