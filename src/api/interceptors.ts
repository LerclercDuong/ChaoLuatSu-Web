import {
    AxiosDefaults,
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    InternalAxiosRequestConfig
} from 'axios'
import {GetAccessToken, GetRefreshToken, RemoveRefreshToken, SetRefreshToken} from "../utils/tokens";
import {api} from "./api";
import { refreshAccessToken } from '../features/auth/auth.actions';
import store from '../redux/store';
import { withRetry } from '../utils/retryAPI';

let isRefreshing = false;
let failedRequestQueue: [] = [];

function setAuthorizationHeader(params: any) {
    const {request, token} = params;
    request.headers['Authorization'] = `Bearer ${token}`;
}

function handleRefreshToken(refreshToken: string | undefined) {
    isRefreshing = true;

    api.post(
        '/auth/refresh',
        {refreshToken},
        {
            headers: {
                Authorization: GetRefreshToken(),
            }
        }
    )
        .then((response: any) => {
            const { refreshToken } = response.data;
            SetRefreshToken(refreshToken);
            setAuthorizationHeader({request: api.defaults, refreshToken});

            failedRequestQueue.forEach((request: any) => request.onSuccess(refreshToken));
            failedRequestQueue = [];
        })
        .catch((error: any) => {
            failedRequestQueue.forEach((request: any) => request.onFailure(error));
            failedRequestQueue = [];
            RemoveRefreshToken();
        })
        .finally(() => {
            isRefreshing = false;
        });
}

function onRequest(config: any) {
    const token = GetAccessToken();
    console.log(token)
    if (token) {
        setAuthorizationHeader({request: config, token});
    }
    return config;
}

function onRequestError(error: any) {
    return Promise.reject(error);
}

function onResponse(response: any) {
    return response;
}


async function onResponseError(error: any) {
    const originalRequest = error.config;

    if (error.response?.status === 401 && error.response?.data?.code === 'token.expired') {
      try {
        const newAccessToken = await store.dispatch(refreshAccessToken());

        if (newAccessToken) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        }
      } catch (err) {
        return Promise.reject(err);
      }
    }

    if (!error.response) {
      return withRetry(api(originalRequest));
    }

    return Promise.reject(error);
}

export function setupInterceptors(axiosInstance: any) {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}