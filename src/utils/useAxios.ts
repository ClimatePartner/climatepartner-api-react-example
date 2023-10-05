import axios, { AxiosInstance } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_UNIFIED_API_URL,
});

export class RestError {
  constructor(
    public readonly message: string,
    public readonly error: string,
    public readonly statusCode: number
  ) {}
}

export const useAxios = (): { axiosInstance: AxiosInstance } => {
  return { axiosInstance };
};
