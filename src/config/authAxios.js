import axios from "axios";
import { API_URL } from "../config/constants";

const authAxios = axios.create({
  baseURL: API_URL,
});

export default authAxios;
