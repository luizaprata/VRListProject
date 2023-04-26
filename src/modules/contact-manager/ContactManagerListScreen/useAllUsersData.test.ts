import useApi from '@/hooks/useApi';
import { act, renderHook } from '@testing-library/react-hooks';
import userUserData from './userUserData';

jest.mock('@/hooks/useApi', () => {
  const baseResult = {
    payload: [],
    isLoading: false,
    errorMessage: null,
    clearErrorMessage: jest.fn(),
    fetchData: jest.fn(),
  };

  let result = { ...baseResult };

  const mock = () => result;

  mock.setResult = (_result) => {
    result = { ...baseResult, ..._result };
  };

  return mock;
});

describe('userUserData', () => {
  test('SHOULD begins requesting', () => {
    const api = useApi();

    const { result } = renderHook(() => userUserData());

    act(() => {});

    expect(api.fetchData).toBeCalled();
  });

  test('SHOULD use useApi isLoading', () => {
    useApi.setResult({ isLoading: true });

    const { result } = renderHook(() => userUserData());

    expect(result.current.isLoading).toBeTruthy();
  });

  test('SHOULD use useApi payload', () => {
    const expected = [];
    useApi.setResult({ payload: expected });

    const { result } = renderHook(() => userUserData());

    expect(result.current.payload).toBe(expected);
  });
});
