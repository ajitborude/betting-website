import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "react-toastify";
// import createAuthRefreshInterceptor from 'axios-auth-refresh';

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
  BadRequest = 400,
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "X-Requested-With": "XMLHttpRequest",
};

class Fetcher {
  public instance: AxiosInstance | null = null;

  public get axiosInstance(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
      headers,
      // withCredentials: true,
    });

    axiosInstance.interceptors.response.use(
      (response) => response.data,
      (error) => {
        return this.handleError(error);
      }
    );

    // Create axios interceptor
    // createAuthRefreshInterceptor(axiosInstance, (failedRequest) =>
    //   // 1. First try request fails - refresh the token.
    //   axiosInstance.get('/api/refreshToken').then((resp) => {
    //     // 1a. Clear old tokens used in 'authorize.ts' higher order function.
    //     localStorage.removeItem('refreshToken');
    //     localStorage.removeItem('authToken');

    //     const { accessToken, refreshToken } = resp.data;
    //     // 2. Set up new access token
    //     const bearer = `Bearer ${accessToken}`;
    //     //@ts-ignore
    //     axiosInstance.defaults.headers.Authorization = bearer;

    //     // 3. Set up new refresh token in localstorage
    //     localStorage.setItem('refreshToken', refreshToken);

    //     // 4. Set up access token of the failed request.
    //     failedRequest.response.config.headers.Authorization = bearer;

    //     // 5. Retry the request with new setup!
    //     return Promise.resolve();
    //   })
    // );

    this.instance = axiosInstance;
    return axiosInstance;
  }

  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.axiosInstance.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axiosInstance.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    const respData = this.axiosInstance.post<T, R>(url, data, config);
    return respData;
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axiosInstance.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axiosInstance.delete<T, R>(url, config);
  }

  // Handle global app errors
  // We can handle generic app errors depending on the status code
  private handleError(error: {
    response: { status: number; data: string };
    message: string;
  }) {
    const { response } = error;
    if (response) {
      const { status } = response;
      switch (status) {
        case StatusCode.InternalServerError: {
          toast.error("Internal Server Error");
          break;
        }
        case StatusCode.Forbidden: {
          toast.error("Forbidden");
          break;
        }
        case StatusCode.Unauthorized: {
          toast.error("Unauthorized");
          break;
        }
        case StatusCode.TooManyRequests: {
          toast.error("Too Many Requests");
          break;
        }
        case StatusCode.BadRequest: {
          // toast.error("Bad Request");
          break;
        }
      }
    }

    return Promise.reject(response.data);
  }
}

export const fetcher = new Fetcher();
