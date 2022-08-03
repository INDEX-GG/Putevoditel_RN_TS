import axios from "axios";
import { BASE_URL, REQUEST_TIMEOUT } from "../constants/constants";

export const axiosCreateConfig = () =>
  axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });
