import {getAllUsersHandler} from './get-all-users.handler';
import {getUsersByIdHandler} from './get-user-by-id.handler';
import {getAllUsersByNameHandler} from './get-all-users-by-name.handler';
import {setupServer} from 'msw/node';

export const mswServer = setupServer(
  getAllUsersHandler,
  // getAllUsersByNameHandler,
  getUsersByIdHandler,
);

beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());
