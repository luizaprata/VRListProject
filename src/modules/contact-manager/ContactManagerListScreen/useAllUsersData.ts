import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const getAllUsers = async () => {
  const {data} = await axios.get('https://dummyjson.com/users');
  return data;
};

export default function getAllUsersApi() {
  return useQuery(['users'], () => getAllUsers(), {
    staleTime: Infinity,
  });
}
