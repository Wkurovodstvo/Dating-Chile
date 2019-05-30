import axios from 'axios';
import { restURL } from '../baseURL';

export const registerUser = (data) => axios.post(`${restURL}/user/registration`, data);
export const loginUser = (data) => axios.post(`${restURL}/user/login`, data);
export const getUser = () => axios.get(`${restURL}/user`);
export const refreshToken = (token) => axios.post(`${restURL}/user/token/refresh`, token);

