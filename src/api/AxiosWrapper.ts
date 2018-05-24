import axios, { AxiosResponse, AxiosAdapter, AxiosBasicCredentials, AxiosTransformer, AxiosProxyConfig, CancelToken } from "axios";
import * as _ from 'lodash'
import {param} from 'jquery'

const api = "http://itis-mobile.azurewebsites.net/api/"

export default class AxiosWrapper {

    static async get<ParamsType, DataType> (path: string, data?: ParamsType, config?: AxiosRequestConfig<ParamsType>) : Promise<AxiosResponse<DataType>> {
        let token = localStorage.getItem("auth_token")
        return await axios.get(`${api}${path}?${param(data || {})}`, _.merge(config, {
            headers: {
                'authorization': token ? `Bearer ${token}` : ''
            }
        }));
    }

    static async post<ParamsType, DataType> (path: string, data?: any, config?: AxiosRequestConfig<ParamsType>) : Promise<AxiosResponse<DataType>> {
        let token = localStorage.getItem("auth_token")
        return await axios.post(`${api}${path}`, data, _.merge(config, {
            headers: {
                'authorization': token ? `Bearer ${token}` : ''
            }
        }));
    }

    static async delete<ParamsType, DataType> (path: string, config?: AxiosRequestConfig<ParamsType>) : Promise<AxiosResponse<DataType>> {
        let token = localStorage.getItem("auth_token")
        return await axios.delete(`${api}${path}`, _.merge(config, {
            headers: {
                'authorization': token ? `Bearer ${token}` : ''
            }
        }))
    }

    static async patch<ParamsType, DataType> (path: string, data?: any, config?: AxiosRequestConfig<ParamsType>) : Promise<AxiosResponse<DataType>> {
        let token = localStorage.getItem("auth_token")
        return await axios.patch(`${api}${path}`, data, _.merge(config, {
            headers: {
                'authorization': token ? `Bearer ${token}` : ''
            }
        }))
    }

    static async put<ParamsType, DataType> (path: string, data?: any, config?: AxiosRequestConfig<ParamsType>) : Promise<AxiosResponse<DataType>> {
        let token = localStorage.getItem("auth_token")
        return await axios.put(path, data, _.merge(config, {
            headers: {
                'authorization': token ? `Bearer ${token}` : ''
            }
        }))
    }
}

export interface AxiosRequestConfig<ParamsT> {
    url?: string;
    method?: string;
    baseURL?: string;
    transformRequest?: AxiosTransformer | AxiosTransformer[];
    transformResponse?: AxiosTransformer | AxiosTransformer[];
    headers?: any;
    params?: ParamsT;
    paramsSerializer?: (params: any) => string;
    data?: any;
    timeout?: number;
    withCredentials?: boolean;
    adapter?: AxiosAdapter;
    auth?: AxiosBasicCredentials;
    responseType?: string;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
    onUploadProgress?: (progressEvent: any) => void;
    onDownloadProgress?: (progressEvent: any) => void;
    maxContentLength?: number;
    validateStatus?: (status: number) => boolean;
    maxRedirects?: number;
    httpAgent?: any;
    httpsAgent?: any;
    proxy?: AxiosProxyConfig | false;
    cancelToken?: CancelToken;
  }