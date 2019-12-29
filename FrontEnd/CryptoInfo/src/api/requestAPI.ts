import axios from "axios";
import { host } from "../constants/config";
import { APIMethod } from "../constants/types";

const axiosInstance = axios.create({
  baseURL: host
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export class RequestAPI {
  private BASE_URL: string;

  constructor(baseUrl: string) {
    this.BASE_URL = baseUrl;
  }

  public publicRequest = async (
    url: string,
    method: APIMethod,
  ) => {
    return await axiosInstance({
      method: method,
      url: this.BASE_URL + url
    });
  };
}