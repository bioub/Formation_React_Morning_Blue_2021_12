import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "./api";

// export function usersFetch() {
//   return async (dispatch) => {
//     dispatch({ type: 'USERS_FETCH_REQUESTED' });
//     const users = await getUsers();
//     dispatch({ type: 'USERS_FETCH_SUCCESS', payload: users });
//   }
// }

export const usersFetch = createAsyncThunk('USERS_FETCH', getUsers)