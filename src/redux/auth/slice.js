import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register, refreshUser } from "./operations";
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        isLoading: false,
    },
    extraReducers: builder =>
        builder
    .addCase(register.pending, (state) => {
        state.isLoading = true;
    })
            .addCase(register.fulfilled, (state, actions) => {
                state.user = actions.payload.user;
                state.token = actions.payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
            })
            .addCase(register.rejected, (state) => {
                state.isLoading = false;
            })


            .addCase(login.pending, state => {
                state.isLoading = true;
            })
    .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    })
            .addCase(login.rejected, state => {
                state.isLoading = false;
            })


            .addCase(logout.pending, state => {
                state.isLoading = true;
            })
            .addCase(logout.fulfilled, state => {
                state.user = {
                    name: null,
                    email: null,
                };
                state.token = null;
                state.isLoading = false;
                state.isLoggedIn = false;
            })
    .addCase(refreshUser.pending, (state) => {
      state.isRefreshing = true
     })
    .addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true
      state.isRefreshing = false
      
     })
        
    // illia23@gmail.com


})

export default authSlice.reducer