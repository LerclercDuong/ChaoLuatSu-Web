import { api } from "../../api/api";
import { BaseResponse, TCreateSlideRequest, TGetListSlideCategoriesRequest, TGetListSlideRequest } from "AppModels";
import { endpoint } from "../../constants/endpoint";
import { AxiosResponse } from "axios";

export function CreateSlide(requestBody: TCreateSlideRequest): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.CREATE_SLIDE, requestBody);
}

export function GetListSlide(requestBody: TGetListSlideRequest): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_LIST_SLIDE, requestBody);
}

export function GetListSlideCategories(requestBody: TGetListSlideCategoriesRequest): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_LIST_SLIDE_CATEGORY, requestBody);
}