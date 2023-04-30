import {getAllUsers, GetAllUsersResponse} from '@api/user/get-all-users';
import {
  getAllUsersByName,
  GetAllUsersByNameResponse,
} from '@api/user/get-all-users-by-name';
import {userKeyFactory} from '@api/user/user-key-factory';
import {useQuery} from '@tanstack/react-query';
import {AxiosError} from 'axios';

export default function useUsersListQuery(searchPhrase?: string) {
  const hasSearchPhase = searchPhrase && searchPhrase.length > 2;
  return useQuery<GetAllUsersResponse, AxiosError>({
    queryKey: hasSearchPhase
      ? userKeyFactory.allUsersByName(searchPhrase)
      : userKeyFactory.allUsers(),
    queryFn: ({signal}) =>
      hasSearchPhase
        ? getAllUsersByName(searchPhrase, signal)
        : getAllUsers(signal),
    staleTime: Infinity,
  });
}
