import { api } from "../../api/api";
import { BaseResponse, TCreateSlideRequest, TGetListSlideCategoriesRequest, TGetListSlideRequest } from "AppModels";
import { endpoint } from "../../constants/endpoint";
import { AxiosResponse } from "axios";
import { TCreatePresentationRequest, TGetListPresentationCategoryRequest, TGetListPresentationRequest } from "Appmodels";

export function CreatePresentation(requestBody: TCreatePresentationRequest): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.CREATE_SLIDE, requestBody);
}

export function GetListPresentation(requestBody: TGetListPresentationRequest): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_LIST_PRESENTATION, requestBody);
}

export function GetListPresentationCategory(requestBody: TGetListPresentationCategoryRequest): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_LIST_PRESENTATION_CATEGORY, requestBody);
}