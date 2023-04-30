import {getAllUsers, GetAllUsersResponse} from '@api/user/get-all-users';
import {userKeyFactory} from '@api/user/user-key-factory';
import {useQuery} from '@tanstack/react-query';
import {AxiosError} from 'axios';

export default function useUsersListQuery(searchPhrase: string) {
  return useQuery<GetAllUsersResponse, AxiosError>({
    queryKey: userKeyFactory.allUsers(searchPhrase),
    queryFn: ({signal}) => getAllUsers(searchPhrase, signal),
    staleTime: Infinity,
  });
}
