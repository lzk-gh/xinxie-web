import { $fetch } from 'ofetch';
import { useRuntimeConfig } from '#app';

interface RequestOptions {
  customBaseURL?: string;
  [key: string]: any;
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

// 请求拦截器
function handleRequest(options: RequestOptions) {
  options.headers = {
    ...options.headers,
    'Content-Type': 'application/json',
  };
}

// 响应拦截器
function handleResponse(response: any) {
  if (response.error) {
    throw new Error(response.error.message || '响应错误');
  }
  return response;
}

/**
 * 创建请求方法
 * @param method
 */
function createDollarFetchRequest(method: HttpMethod) {
  return async function (
    url: string,
    data?: any,
    options: RequestOptions = {}
  ) {
    const {
      public: {
        API_BASE_DEV,
        API_BASE_PROD
      }
    } = useRuntimeConfig();

    const baseURL = process.env.NODE_ENV === 'production'
      ? API_BASE_PROD
      : API_BASE_DEV;

    const requestUrl = new URL(
      url,
      options.customBaseURL || baseURL
    ).toString();

    try {
      handleRequest(options);
      const response = await $fetch(requestUrl, {
        method,
        body: data,
        ...options,
      });
      return handleResponse(response);
    } catch (error) {
      console.error('请求错误:', error);
      throw error;
    }
  };
}

// 提供 $fetch & HTTP 方法 - 统一管理请求 - 再到组件中使用
export const useDollarGet = createDollarFetchRequest('GET');
export const useDollarPost = createDollarFetchRequest('POST');
export const useDollarPut = createDollarFetchRequest('PUT');
export const useDollarDelete = createDollarFetchRequest('DELETE');
