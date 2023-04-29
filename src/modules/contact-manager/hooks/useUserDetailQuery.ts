import {getUserById, GetUsersByIdResponse} from '@api/user/get-user-by-id';
import {userKeyFactory} from '@api/user/user-key-factory';
import {useQuery} from '@tanstack/react-query';
import {AxiosError} from 'axios';

export default function useUserDetailQuery(userId: number) {
  const queryKey = userKeyFactory.userById(userId);
  return useQuery<GetUsersByIdResponse, AxiosError>({
    queryKey,
    queryFn: () => getUserById(userId),
    staleTime: Infinity,
  });
}
