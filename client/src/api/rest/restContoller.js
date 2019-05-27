import axios from 'axios';
import { restURL } from '../baseURL';

export const token = () => axios.post(`${restURL}/user/token`);


