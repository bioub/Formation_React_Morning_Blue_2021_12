import { createReducer } from "@reduxjs/toolkit";
import { usersFetch } from "./actions";

const initialState = {
  loading: false,
  items: [],
}

export const usersReducer = createReducer(initialState, {
  [usersFetch.pending]: (state, action) => ({
    loading: true,
    items: [],
  }),
  [usersFetch.fulfilled]: (state, action) => ({
    loading: false,
    items: action.payload,
  }),
});