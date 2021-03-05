import { useContext } from "react";
import { API_ENV } from "../shared/global-service.const";
import axios from "axios";

const defaultOptions = {
  useCancellation: true,
  applyInterceptors: true,
};

const useGlobalAPI = () => {
  const options = { ...defaultOptions };

  const baseURL = API_ENV;
  const timeout = 3000;

  const BaseAPI = axios.create({
    baseURL,
    timeout,
  });

  const interceptSuccessResponse = (res: any) => {
    return res;
  };

  const interceptErrorResponse = (err: any) => {
    return Promise.reject(err);
  };

  const interceptRequest = (config: any) => {
    if (options.useCancellation) {
    }

    return config;
  };

  if (options.applyInterceptors) {
    BaseAPI.interceptors.request.use(interceptRequest);
    BaseAPI.interceptors.response.use(
      interceptSuccessResponse,
      interceptErrorResponse
    );
  }

  return {
    BaseAPI,
  };
};

export default useGlobalAPI;
