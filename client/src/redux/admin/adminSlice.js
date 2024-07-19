import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAdmin:null,
    error:null,
    loading:null
}

const adminSlice = createSlice({
    name:"admin",
    initialState,
    reducers:{
        adminSignInStart: (state) => {
            state.loading = true;
            state.error = null;
        },

        adminSignInSuccess: (state, action) => {
            state.currentAdmin = action.payload.user;
            state.loading = false;
            state.error = null;
        },
        adminSignInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const {adminSignInStart, adminSignInSuccess, adminSignInFailure} = adminSlice.actions;
export default adminSlice.reducer;