import { createSlice } from "@reduxjs/toolkit";
import {appInitialState} from "./app.initialState";
import {
    setCurrentDashboardTab,
    setIsLoading,
    setLoginModalOpen,
    setSignUpModalOpen
} from "./app.reducers";

const app = createSlice({
    name: "app",
    initialState: appInitialState,
    reducers: {
        setCurrentDashboardTabAction: setCurrentDashboardTab,
        setLoginModalOpenAction: setLoginModalOpen,
        setSignUpModalOpenAction: setSignUpModalOpen,
        setIsLoadingAction: setIsLoading,
    }
})

export const {
    setCurrentDashboardTabAction,
    setLoginModalOpenAction,
    setSignUpModalOpenAction,
    setIsLoadingAction
} = app.actions;

export default app.reducer;