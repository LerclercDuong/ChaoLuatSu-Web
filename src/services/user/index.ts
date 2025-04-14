import { api } from "../../api/api";
import { BaseResponse, TAuthenticateRequest, TGetMyInfoRequest, TRefreshAccessTokenRequest, TSignUpRequest } from "AppModels";
import { endpoint } from "../../constants/endpoint";
import { AxiosResponse } from "axios";

export function Authenticate(requestBody: TAuthenticateRequest): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.AUTHENTICATE, requestBody);
}

export function RefreshAccessToken(requestBody: TRefreshAccessTokenRequest): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.REFRESH_ACCESS_TOKEN, requestBody);
}

export function SignUp(requestBody: TSignUpRequest): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.SIGN_UP, requestBody);
}

export function GetMyInfo(requestBody: TGetMyInfoRequest): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_MY_INFO, requestBody);
}
