import { TAppState } from "AppModels"

export const appInitialState: TAppState = {
    onlineStatus: true,
    currentTabIndex: 0,
    currentDashboardTab: null,
    loginModalOpen: false,
    signUpModalOpen: false,
    isLoading: false,
}