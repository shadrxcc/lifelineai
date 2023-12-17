import axios from "axios";
import { BASE_URL } from "../config";

export const AxiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
})