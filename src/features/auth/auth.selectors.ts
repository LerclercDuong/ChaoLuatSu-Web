import { RootState } from '../../redux/rootReducer'; // Import your RootState type

export const selectUserInfo = (state: RootState) => state.auth.user;

export const selectIsAuthenticated = (state: RootState) => state.auth.auth.isAuthenticated;

export const selectAuthInfo = (state: RootState) => state.auth.auth;

export const selectAccessToken = (state: RootState) => state.auth.auth.accessToken;

export const selectRefreshToken = (state: RootState) => state.auth.auth.refreshToken;
