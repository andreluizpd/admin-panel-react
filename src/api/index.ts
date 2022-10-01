import axios from 'axios';
import { Agency, CreateAgencyDto, RemoveAgencyDto } from '../types/agency';
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

export const getAgency = (id: string, token: string): Promise<Agency> =>
  axiosInstance
    .get(`${BASE_URL}/agencies/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => response.data);

export const createAgency = (
  agencyInfo: CreateAgencyDto & { token: string }
): Promise<void> =>
  axiosInstance
    .post(
      `${BASE_URL}/agencies`,
      { ...agencyInfo, token: undefined },
      { headers: { Authorization: `Bearer ${agencyInfo.token}` } }
    )
    .then(response => response.data);

export const removeAgency = (agencyInfo: RemoveAgencyDto): Promise<void> =>
  axiosInstance
    .delete(`${BASE_URL}/agencies/${agencyInfo.id}`, {
      headers: { Authorization: `Bearer ${agencyInfo.token}` },
    })
    .then(response => response.data);
