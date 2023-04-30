import {Pagination} from '@api/types/Pagination';
import {User} from '@api/types/User';
import {api} from '@api/axios.instance';

export type GetAllUsersByNameResponse = Pagination & {users: User[]};

export const getPath = (searchPhrase: string) =>
  `/users/search?q=${searchPhrase}`;

export const getAllUsersByName = async (
  searchPhrase: string,
  signal?: AbortSignal,
) => {
  const fetchApi = await api.get<GetAllUsersByNameResponse>(
    getPath(searchPhrase),
    {
      signal,
    },
  );
  return fetchApi.data;
};
