import {BASE_URL} from '@api/axios.instance';

import {rest} from 'msw';
import {GetAllUsersResponse, getPath} from '@api/user/get-all-users';

const mockResponse: GetAllUsersResponse = [
  {
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
  },
];

const getAllUsersPath = `${BASE_URL}${getPath()}`;

export const getAllUsersHandler = rest.get(
  getAllUsersPath,
  async (req, res, ctx) => res(ctx.json(mockResponse)),
);

// export const getAllUsersHandlerException = rest.get(
//   getAllUsersPath,
//   async (req, res, ctx) =>
//     res(ctx.status(500), ctx.json({message: 'Deliberately broken request'})),
// );
