import axios from "axios";
import type {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from "axios";
import { BASE_URL, TIMEOUT } from "./request/config";
import localCache from "@/util/cache";
import { AxiosLoading } from "./request/loading";
import { ElMessage } from "element-plus";

const axiosLoading = new AxiosLoading();
const service: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
});

/* 请求拦截器 */
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    axiosLoading.addLoading();
    const token = localCache.getCache("token") || "";
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

/* 响应拦截器 */
service.interceptors.response.use(
  (response: AxiosResponse) => {
    axiosLoading.closeLoading();
    const { data, message, code } = response.data;
    if (code === 0) {
      ElMessage({
        message: "请求成功",
        type: "success"
      });
      return data;
    } else {
      return Promise.reject(new Error(message));
    }
  },
  (error: AxiosError) => {
    axiosLoading.closeLoading();
    return Promise.reject(error);
  }
);

/* 导出封装的请求 */
export const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.get(url, config);
  },

  post<T = any>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return service.post(url, data, config);
  },

  put<T = any>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return service.put(url, data, config);
  },

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.delete(url, config);
  }
};

/* 导出axios实例 */
export default service;
