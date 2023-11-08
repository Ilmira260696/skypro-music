import { createSlice } from "@reduxjs/toolkit";

const AUTHORIZATION = "auth";
function getAuthLS() {
    try {
        return JSON.parse(localStorage.getItem(AUTHORIZATION));
    } catch(error) {
        return null;
    }
}

const initialState = {
   access:"",
   refresh:"",
   user:"",
  }
  export const authSlice = createSlice({
    name: "auth",
    initialState: getAuthLS() ?? initialState,
    reducers: {
    setAuth:(state, action) => {
        const { access, refresh, user } = action.payload ?? initialState
        state.access = access
        state.refresh = refresh
        state.user = user
        localStorage.setItem(AUTHORIZATION, JSON.stringify(state));
    }
   }
  })
  export const {setAuth} = authSlice.actions
  export default authSlice.reducer