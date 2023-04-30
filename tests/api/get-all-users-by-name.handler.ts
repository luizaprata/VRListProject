import {BASE_URL} from '@api/axios.instance';

import {rest} from 'msw';
import {
  GetAllUsersByNameResponse,
  getPath,
} from '@api/user/get-all-users-by-name';

const mockResponse: GetAllUsersByNameResponse = {
  users: [
    {
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
    },
  ],
  total: 100,
  skip: 0,
  limit: 30,
};

const getAllUsersByNamePath = `${BASE_URL}${getPath('Terry')}`;

export const getAllUsersByNameHandler = rest.get(
  getAllUsersByNamePath,
  async (req, res, ctx) => res(ctx.json(mockResponse)),
);
