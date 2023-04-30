import {getAllUsersHandler} from './api/get-all-users.handler';
import {getUsersByIdHandler} from './api/get-user-by-id.handler';
import {getAllUsersByNameHandler} from './api/get-all-users-by-name.handler';
import {setupServer} from 'msw/node';

global.mswServer = setupServer(
  getAllUsersHandler,
  getAllUsersByNameHandler,
  getUsersByIdHandler,
);

beforeAll(() => global.mswServer.listen());
afterEach(() => global.mswServer.resetHandlers());
afterAll(() => global.mswServer.close());
