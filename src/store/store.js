import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";
import profileReducer from "./reducers/profileSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    profile: profileReducer,
  },
});

export default store;
