import { AxiosResponse } from "axios";
import { setIsLoadingAction } from "../features/app";
import { BaseResponse } from "AppModels";

export const handleApiRequest = async (
    dispatch: any,
    apiCall: () => AxiosResponse<BaseResponse<any>, any>,
    successAction: (data: any) => void,
    errorAction?: (error: string) => void
) => {
    dispatch(setIsLoadingAction(true));
    try {
        const response = await apiCall();
        if (response) {
            dispatch(successAction(response.data.payload));
        }
    } catch (error: any) {
        const errorMessage = error?.response?.data?.error || error.message;
        if (errorAction) {
            dispatch(errorAction(errorMessage));
        }
    } finally {
        dispatch(setIsLoadingAction(false));
    }
};
