import {User} from '@api/types/User';
import {api} from '../axios.instance';

export type GetUsersByIdResponse = User;

export const getUserById = async (id: number) => {
  return (await api.get<GetUsersByIdResponse>(`/users/${id}`)).data;
};
