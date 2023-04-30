import {Pagination} from '@api/types/Pagination';
import {User} from '@api/types/User';

import {api} from '../axios.instance';

export type GetAllUsersResponse = Pagination & {users: User[]};

export const getAllUsers = async (userName?: string, signal?: AbortSignal) => {
  const fetchApi = await api.get<GetAllUsersResponse>(
    userName ? `/users/search?q=${userName}` : '/users',
    {signal},
  );
  return fetchApi.data;
};
