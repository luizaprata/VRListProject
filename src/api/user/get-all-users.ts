import {Pagination} from '@api/types/Pagination';
import {User} from '@api/types/User';
import {api} from '@api/axios.instance';

export type GetAllUsersResponse = Pagination & {users: User[]};
export const getPath = () => '/users';

export const getAllUsers = async (signal?: AbortSignal) => {
  const fetchApi = await api.get<GetAllUsersResponse>(getPath(), {signal});
  return fetchApi.data;
};
