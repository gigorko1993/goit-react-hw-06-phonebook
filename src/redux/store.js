import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts-reducer";
// const initialState = {
//   contacts: {
//     items: [],
//     filter: "",
//     isLoading: false,
//   },
// };

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  //   initialState,
  devTools: process.env.NODE_ENV === "development",
});
