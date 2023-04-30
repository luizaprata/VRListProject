import {getAllUsersHandler} from '@api/user/__tests__/get-all-users.handler';
import {getUsersByIdHandler} from '@api/user/__tests__/get-user-by-id.handler';
import {setupServer} from 'msw/node';

export const mswServer = setupServer(getAllUsersHandler, getUsersByIdHandler);

beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());
