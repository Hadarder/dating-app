import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "user",
  initialState: {username : "",
    password : "",
    name : "",
    age : 0,
    gender : "",
    lookingFor : ""},
  reducers: {
    loginUser: (_, { payload }) => payload,
    updateProfile: (user, { payload: { name, age, gender, lookingFor } }) => ({
      ...user,
      name,
      age,
      gender,
      lookingFor
    })}
});

export const userReducer = reducer;
export const userActions = actions;
