import {BASE_URL} from '@api/axios.instance';

import {rest} from 'msw';
import {GetUsersByIdResponse, getPath} from '../get-user-by-id';

const mockResponse: GetUsersByIdResponse = {
  id: 1,
  firstName: 'Terry',
  lastName: 'Medhurst',
  email: 'atuny0@sohu.com',
  phone: '+63 791 675 8914',
  birthDate: '2000-12-25',
  image: 'https://robohash.org/hicveldicta.png',
  address: {
    address: '1745 T Street Southeast',
    city: 'Washington',
    postalCode: '20020',
    state: 'DC',
  },
  company: {
    address: {
      address: '629 Debbie Drive',
      city: 'Nashville',
      postalCode: '37076',
      state: 'TN',
    },
    department: 'Marketing',
    name: "Blanda-O'Keefe",
    title: 'Help Desk Operator',
  },
  ein: '20-9487066',
};

const getUsersByIdPath = `${BASE_URL}${getPath(1)}`;

export const getUsersByIdHandler = rest.get(
  getUsersByIdPath,
  async (req, res, ctx) => res(ctx.json(mockResponse)),
);
