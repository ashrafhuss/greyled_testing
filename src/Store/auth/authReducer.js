import { createSlice } from "@reduxjs/toolkit";
import storage from "../../services/storage";

const user = storage.get("user") || {
  firstName: "",
  lastName: "",
  _id: "",
  email: "",
};

const crClass = storage.get("class") || {
  courseNumber: "",
  courseName: "",
  startDate: "",
  endDate: "",
  _id: "",
};

const token = storage.get("xAuthToken") || "";

const initialState = {
  token,
  user,
  crClass,
  adSection: [],
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      //state.crClass
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    resetAuth: (state) => {
      state = initialState;
    },
    addSection: (state, action) => {
      state.adSection = action.payload;
    },
  },
});

export const { setUser, setToken, resetAuth, addSection } = slice.actions;
export default slice.reducer;
