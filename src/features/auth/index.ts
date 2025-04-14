import { createSlice } from "@reduxjs/toolkit";
import authInitialState from "./auth.initialState";
import {
    setUserInfo, 
    setAuthInfo,
    setSignUpStatus,
    setUpdateUserStatus,
    setIsLoaded,
    setIsAuthenticated,
    setAuthenticateError,
    setAccessToken,
    setIdToken,
    setRefreshToken,
} from "./auth.reducers";


const auth = createSlice({
    name: "auth",
    initialState: authInitialState,
    reducers: {
        setUserInfoAction: setUserInfo,
        setAuthInfoAction: setAuthInfo,
        setIsAuthenticatedAction: setIsAuthenticated,
        setAuthenticateErrorAction: setAuthenticateError,
        setSignUpStatusAction: setSignUpStatus,
        setUpdateUserStatusAction: setUpdateUserStatus,
        setIsLoadedAction: setIsLoaded,
        setAccessTokenAction: setAccessToken,
        setIdTokenAction: setIdToken,
        setRefreshTokenToken: setRefreshToken
    }
})

export const {
    setUserInfoAction,
    setAuthInfoAction,
    setIsAuthenticatedAction,
    setAuthenticateErrorAction,
    setSignUpStatusAction,
    setUpdateUserStatusAction,
    setIsLoadedAction,
    setAccessTokenAction,
    setIdTokenAction,
    setRefreshTokenToken
} = auth.actions;

export default auth.reducer;