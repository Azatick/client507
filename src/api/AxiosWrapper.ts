import axios, { AxiosResponse, AxiosAdapter, AxiosBasicCredentials, AxiosTransformer, AxiosProxyConfig, CancelToken } from "axios";

export default class AxiosWrapper {

    static async get<ParamsType, DataType> (path: string, options?: AxiosRequestConfig<ParamsType>) : Promise<AxiosResponse<DataType>> {
        return await axios.get(path, options);
    }

    static async post<ParamsType, DataType> (path: string, options?: AxiosRequestConfig<ParamsType>) : Promise<AxiosResponse<DataType>> {
        return await axios.post(path, options);
    }

    static async delete<ParamsType, DataType> (path: string, options?: AxiosRequestConfig<ParamsType>) : Promise<AxiosResponse<DataType>> {
        return await axios.delete(path, options);
    }

    static async patch<ParamsType, DataType> (path: string, options?: AxiosRequestConfig<ParamsType>) : Promise<AxiosResponse<DataType>> {
        return await axios.patch(path, options);
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