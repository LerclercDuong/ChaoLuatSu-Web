import { RootState } from "../../redux/rootReducer";


export const selectCurrentDashboardTab = (state: RootState) => state.app.currentDashboardTab;

export const selectLoginModalOpen = (state: RootState) => state.app.loginModalOpen;

export const selectSignUpModalOpen = (state: RootState) => state.app.signUpModalOpen;

export const selectIsLoading = (state: RootState) => state.app.isLoading;