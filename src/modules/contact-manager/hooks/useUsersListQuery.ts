import {useQuery} from '@tanstack/react-query';
import {userKeyFactory} from '@api/user/user-key-factory';
import {GetAllUsersResponse, getAllUsers} from '@api/user/get-all-users';
import {AxiosError} from 'axios';

export default function useUsersListQuery() {
  return useQuery<GetAllUsersResponse, AxiosError>({
    queryKey: userKeyFactory.allUsers,
    queryFn: getAllUsers,
    staleTime: Infinity,
  });
}
