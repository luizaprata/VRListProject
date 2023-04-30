import {BASE_URL} from '@api/axios.instance';

import {rest} from 'msw';
import {GetAllUsersResponse, getPath} from '@api/user/get-all-users';

const mockResponse: GetAllUsersResponse = {
  users: [
    {
      id: 1,
      firstName: 'Terry',
      lastName: 'Medhurst',
      maidenName: 'Smitham',
      age: 50,
      gender: 'male',
      email: 'atuny0@sohu.com',
      phone: '+63 791 675 8914',
      username: 'atuny0',
      password: '9uQFF1Lh',
      birthDate: '2000-12-25',
      image: 'https://robohash.org/hicveldicta.png',
      bloodGroup: 'A−',
      height: 189,
      weight: 75.4,
      eyeColor: 'Green',
      hair: {
        color: 'Black',
        type: 'Strands',
      },
      domain: 'slashdot.org',
      ip: '117.29.86.254',
      address: {
        address: '1745 T Street Southeast',
        city: 'Washington',
        coordinates: {
          lat: 38.867033,
          lng: -76.979235,
        },
        postalCode: '20020',
        state: 'DC',
      },
      macAddress: '13:69:BA:56:A3:74',
      university: 'Capitol University',
      bank: {
        cardExpire: '06/22',
        cardNumber: '50380955204220685',
        cardType: 'maestro',
        currency: 'Peso',
        iban: 'NO17 0695 2754 967',
      },
      company: {
        address: {
          address: '629 Debbie Drive',
          city: 'Nashville',
          coordinates: {
            lat: 36.208114,
            lng: -86.58621199999999,
          },
          postalCode: '37076',
          state: 'TN',
        },
        department: 'Marketing',
        name: "Blanda-O'Keefe",
        title: 'Help Desk Operator',
      },
      ein: '20-9487066',
      ssn: '661-64-2976',
      userAgent:
        'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24',
    },
    {
      id: 28,
      firstName: 'Kody',
      lastName: 'Terry',
      maidenName: 'Larkin',
      age: 28,
      gender: 'male',
      email: 'xisherwoodr@ask.com',
      phone: '+81 859 545 8951',
      username: 'xisherwoodr',
      password: 'HLDqN5vCF',
      birthDate: '1979-01-09',
      image: 'https://robohash.org/consequunturabnon.png',
      bloodGroup: 'B−',
      height: 172,
      weight: 90.2,
      eyeColor: 'Blue',
      hair: {
        color: 'Brown',
        type: 'Wavy',
      },
      domain: 'elpais.com',
      ip: '51.102.180.216',
      address: {
        address: '210 Green Road',
        city: 'Manchester',
        coordinates: {
          lat: 41.7909099,
          lng: -72.51195129999999,
        },
        postalCode: '06042',
        state: 'CT',
      },
      macAddress: 'B4:B6:17:3C:41:E5',
      university: 'Science University of Tokyo',
      bank: {
        cardExpire: '05/23',
        cardNumber: '201443655632569',
        cardType: 'diners-club-enroute',
        currency: 'Yen',
        iban: 'GT70 4NNE RDSR 0AJV 6AQI 4XH1 RWOC',
      },
      company: {
        address: {
          address: '109 Summit Street',
          city: 'Burlington',
          coordinates: {
            lat: 44.4729749,
            lng: -73.2026566,
          },
          postalCode: '05401',
          state: 'VT',
        },
        department: 'Support',
        name: 'Leffler, Beatty and Kilback',
        title: 'Recruiting Manager',
      },
      ein: '09-1129306',
      ssn: '389-74-9456',
      userAgent:
        'Mozilla/6.0 (Macintosh; I; Intel Mac OS X 11_7_9; de-LI; rv:1.9b4) Gecko/2012010317 Firefox/10.0a4',
    },
  ],
  total: 100,
  skip: 0,
  limit: 30,
};

const getAllUsersPath = `${BASE_URL}${getPath()}`;

export const getAllUsersHandler = rest.get(
  getAllUsersPath,
  async (req, res, ctx) => res(ctx.json(mockResponse)),
);

global.getAllUsersHandlerException = rest.get(
  getAllUsersPath,
  async (req, res, ctx) =>
    res(ctx.status(500), ctx.json({message: 'Deliberately broken request'})),
);
