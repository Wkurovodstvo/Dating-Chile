import axios from 'axios';
import { restURL } from '../baseURL';

export const registrateUser = (data) => axios.post(`${restURL}/user/registration`, data);


