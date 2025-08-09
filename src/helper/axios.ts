import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

export const axiosInstance = axios;

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      body?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, body, params }) => {
    try {
      axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
      axiosInstance.defaults.headers.common['X-Custom'] = 'mike/test';
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data: body,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
