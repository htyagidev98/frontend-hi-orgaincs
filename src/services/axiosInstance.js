import axios from "axios";
import { BASE_URL } from "../utils/helper";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const requestHandler = async (request) => {
  const accessToken = localStorage.getItem("token");
  try {
    request.headers["Authorization"] = accessToken;
  } catch (e) {
    console.log(e, "err");
  }
  return request;
};

const responseHandler = (response) => {
  return response;
};
axiosInstance.interceptors.request.use(requestHandler, (error) => {
  Promise.reject(error);
});
axiosInstance.interceptors.response.use(responseHandler, async (error) => {
  console.log("intercepter console", error);

  return Promise.reject(error);
});
export default axiosInstance;
