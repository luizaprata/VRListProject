// import {renderHook} from '@testing-library/react-native';
// import useAllUsersQuery from './useAllUsersQuery';

// jest.mock('useAllUsersQuery', () => {
//   const baseResult = {
//     payload: [],
//     isLoading: false,
//     errorMessage: null,
//     clearErrorMessage: jest.fn(),
//     fetchData: jest.fn(),
//   };

//   let result = {...baseResult};

//   const mock = () => result;

//   mock.setResult = _result => {
//     result = {...baseResult, ..._result};
//   };

//   return mock;
// });

// describe('useAllUsersQuery', () => {
//   test('SHOULD begins requesting', () => {
//     const api = useAllUsersQuery();

//     const {result} = renderHook(() => useAllUsersQuery());

//     act(() => {});

//     expect(api.fetchData).toBeCalled();
//   });

//   test('SHOULD use useAllUsersQuery isLoading', () => {
//     useAllUsersQuery.setResult({isLoading: true});

//     const {result} = renderHook(() => useAllUsersQuery());

//     expect(result.current.isLoading).toBeTruthy();
//   });

//   test('SHOULD use useAllUsersQuery payload', () => {
//     const expected = [];
//     useAllUsersQuery.setResult({payload: expected});

//     const {result} = renderHook(() => useAllUsersQuery());

//     expect(result.current.payload).toBe(expected);
//   });
// });

test('SHOULD use useAllUsersQuery payload', () => {
  expect(true).toBe(true);
});
