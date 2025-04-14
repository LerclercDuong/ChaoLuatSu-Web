import { PayloadAction } from "@reduxjs/toolkit";
import { TAuthState } from "AppModels";

export const setAuthInfo = (state: TAuthState, action: PayloadAction<any>) => {
    state.auth = action.payload;
}
export const setIsAuthenticated = (state: TAuthState, action: PayloadAction<any>) => {
    state.auth.isAuthenticated = action.payload;
}
export const setUserInfo = (state: TAuthState, action: PayloadAction<any>) => {
    state.user = action.payload;
}
export const setAuthenticateError = (state: TAuthState, action: PayloadAction<any>) => {
    state.auth.authenticateError = action.payload;
}
export const setSignUpStatus = (state: TAuthState, action: PayloadAction<any>) => {
    state.auth.signUpStatus = action.payload;
}
export const setUpdateUserStatus = (state: TAuthState, action: PayloadAction<any>) => {
    state.auth.updateUserStatus = action.payload;
}
export const setIsLoaded = (state: TAuthState, action: PayloadAction<any>) => {
    state.auth.isLoaded = action.payload;
}
export const setIdToken = (state: TAuthState, action: PayloadAction<any>) => {
    state.auth.idToken = action.payload;
}
export const setAccessToken = (state: TAuthState, action: PayloadAction<any>) => {
    state.auth.accessToken = action.payload;
}
export const setRefreshToken = (state: TAuthState, action: PayloadAction<any>) => {
    state.auth.refreshToken = action.payload;
}