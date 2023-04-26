import {Pagination} from './Pagination';
import {User} from './User';

export type GetAllUsersResponse = Pagination & {users: User[]};
