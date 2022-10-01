import axios from 'axios';
import { Agency } from '../types/agency';
import { loginDto, tokenAccess } from '../types/user';

const BASE_URL = 'http://127.0.0.1:3000';

const axiosInstance = axios.create({ baseURL: BASE_URL });

export const logIn = (loginInfo: loginDto): Promise<tokenAccess> =>
  axiosInstance
    .post(`${BASE_URL}/users/signin`, { ...loginInfo })
    .then(response => response.data);

export const getAgencies = (token: string): Promise<Agency[]> =>
  axiosInstance
    .get(`${BASE_URL}/agencies`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => response.data);
