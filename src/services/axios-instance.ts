import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URI || "http://localhost:3000/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (err: AxiosError<{ message: string }>) => {
    if (
      err.response?.status === 401 ||
      err.response?.data.message === "Unauthorized"
    ) {
      try {
        const response = await axiosInstance.post<unknown>(
          "/auth/refresh-token"
        );

        if (response.status === 401) return (window.location.pathname = "/a/l");
        // @ts-ignore
        return axiosInstance(err.config);
      } catch (err) {
        // console.log(err);
        // return Promise.reject(err);
        return (window.location.pathname = "/a/l");
      }
    }
    return Promise.reject(err);
  }
);
