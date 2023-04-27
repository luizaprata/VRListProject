import {useQuery} from '@tanstack/react-query';
import {userKeyFactory} from '../../../api/user/user-key-factory';
import {getAllUsers} from '../../../api/user/get-all-users';

export default function useUserDetailQuery() {
  return useQuery({
    queryKey: userKeyFactory.allUsers,
    queryFn: getAllUsers,
    staleTime: Infinity,
  });
}
