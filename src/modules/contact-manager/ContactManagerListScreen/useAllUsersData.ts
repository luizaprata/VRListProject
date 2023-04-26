import {useQuery} from '@tanstack/react-query';
import axios, {AxiosError} from 'axios';
import {GetAllUsersResponse} from '../types/ApiResponses';

const getAllUsers = async () => {
  const {data} = await axios.get('https://dummyjson.com/users');
  return data;
};

export default function getAllUsersApi() {
  return useQuery<GetAllUsersResponse, AxiosError>(
    ['users'],
    () => getAllUsers(),
    {
      staleTime: Infinity,
    },
  );
}
