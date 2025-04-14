
declare module 'AppModels' {
    export type TAppState = {
        onlineStatus: boolean,
        currentTabIndex: number,
        currentDashboardTab: any,
        loginModalOpen: boolean,
        signUpModalOpen: boolean,
        isLoading: boolean
    }
    export type TAppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
}