import { createSlice } from "@reduxjs/toolkit";

const createUser = (
  username,
  password,
  name = "",
  age = 0,
  gender = "",
  lookingFor = ""
) => {
  return {
    username,
    password,
    name,
    age,
    gender,
    lookingFor
  };
};

const { reducer, actions } = createSlice({
  name: "user",
  initialState: createUser("", ""),
  reducers: {
    registerUser: (_, { payload: { username, password } }) =>
      createUser(username, password),
    updateProfile: (user, { payload: { name, age, gender, lookingFor } }) => ({
      ...user,
      name,
      age,
      gender,
      lookingFor
    }),
    loginUser: (
      _,
      { payload: { username, password, name, age, gender, lookingFor } }
    ) => {
      return createUser(username, password, name, age, gender, lookingFor);
    }
  }
});

export const userReducer = reducer;
export const userActions = actions;
