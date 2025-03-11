import axios from "axios";

axios.defaults.baseURL = 'https://django-api-lesson-4f619d0ee306.herokuapp.com/'
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();