import { PayloadAction } from "@reduxjs/toolkit";
import { TAppState } from "AppModels";

export const setCurrentDashboardTab = (state: TAppState, action: PayloadAction<any>) => {
    state.currentDashboardTab = action.payload;
}

export const setLoginModalOpen = (state: TAppState, action: PayloadAction<any>) => {
    state.loginModalOpen = action.payload;
}

export const setSignUpModalOpen = (state: TAppState, action: PayloadAction<any>) => {
    state.signUpModalOpen = action.payload;
}

export const setIsLoading = (state: TAppState, action: PayloadAction<any>) => {
    state.isLoading = action.payload;
}