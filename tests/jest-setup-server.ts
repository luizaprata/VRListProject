import {getAllUsersHandler} from '@api/__tests__/get-all-users.handler';
import {getUsersByIdHandler} from '@api/__tests__/get-user-by-id.handler';
import {getAllUsersByNameHandler} from '@api/__tests__/get-all-users-by-name.handler';
import {setupServer} from 'msw/node';

global.mswServer = setupServer(
  getAllUsersHandler,
  // getAllUsersByNameHandler,
  getUsersByIdHandler,
);

beforeAll(() => global.mswServer.listen());
afterEach(() => global.mswServer.resetHandlers());
afterAll(() => global.mswServer.close());
