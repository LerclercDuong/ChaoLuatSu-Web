import { TAppThunk } from "AppModels";
import { Authenticate, GetMyInfo } from "../../services/user";
import { GetAccessToken, SetAccessToken, SetRefreshToken } from "../../utils/tokens";
import { setAccessTokenAction, setAuthenticateErrorAction, setIsAuthenticatedAction, setIsLoadedAction, setUserInfoAction } from ".";
import { useSelector } from "react-redux";
import { setAccessToken } from "./auth.reducers";
import axios from "axios";


export const requestAuthenticate = ({ email, password }: { email: string, password: string }): TAppThunk => {
    return async (dispatch: any) => {
        dispatch(setIsLoadedAction(false))
        try {
            const response = await Authenticate({ email, password });
            if (response) {
                const payload = response.data.payload;
                SetAccessToken(payload.accessToken);
                SetRefreshToken(payload.refreshToken);
                dispatch(setIsAuthenticatedAction(true));
                const userInfo = await GetMyInfo({});
                if (userInfo) {
                    dispatch(setUserInfoAction(userInfo.data.payload));
                }
            };
        } catch (error: any) {
            const errorMessage = error?.response?.data.error || error.message;
            dispatch(setAuthenticateErrorAction(errorMessage));
        } finally {
            dispatch(setIsLoadedAction(true))
        }
    };
};

export const requestSignUp = ({ email, password, firstName, lastName, phoneNumber }: { email: string, password: string, firstName: string, lastName: string, phoneNumber: string }): TAppThunk => {
    return async (dispatch: any) => {

    };
};

export const refreshAccessToken = (): TAppThunk => {
    return async (dispatch: any) => {
        try {

            const refreshToken = useSelector((state: any) => state.auth.refreshToken);
            if (!refreshToken) {
                dispatch(setAccessTokenAction(null));
                return;
            }

            const response = await axios.post('/auth/refresh', { refreshToken });

            const newAccessToken = response.data.accessToken;
            dispatch(setAccessTokenAction(newAccessToken));
            return newAccessToken;
        } catch (error) {
            dispatch(setAccessTokenAction(null));
            return null;
        }
    }
};