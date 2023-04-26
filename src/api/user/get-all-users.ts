import {Pagination} from '../../types/Pagination';
import {User} from '../../types/User';
import {api} from '../axios.instance';

export type GetAllUsersResponse = Pagination & {users: User[]};

export const getAllUsers = async () => {
  return (await api.get<GetAllUsersResponse>('/users')).data;
};
