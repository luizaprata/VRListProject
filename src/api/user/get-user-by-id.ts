import {User} from '@api/types/User';
import {api} from '@api/axios.instance';

export type GetUsersByIdResponse = User;
export const getPath = (id: number) => `/users/${id}`;

export const getUserById = async (id: number) => {
  const fetchApi = await api.get<GetUsersByIdResponse>(getPath(id));
  return fetchApi.data;
};
