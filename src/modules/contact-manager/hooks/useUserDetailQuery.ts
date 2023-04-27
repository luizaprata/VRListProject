import {useQuery} from '@tanstack/react-query';
import {userKeyFactory} from '@api/user/user-key-factory';
import {AxiosError} from 'axios';
import {GetUsersByIdResponse, getUserById} from '@api/user/get-user-by-id';

export default function useUserDetailQuery(userId: number) {
  const queryKey = userKeyFactory.userById(userId);
  return useQuery<GetUsersByIdResponse, AxiosError>({
    queryKey,
    queryFn: () => getUserById(userId),
    staleTime: Infinity,
  });
}
