import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react-native';
import useUserDetailQuery from './useUserDetailQuery';

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // ✅ turns retries off
        retry: false,
      },
    },
  });

  return ({children}) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};


describe("useUserDetailQuery hook", async () => {
  test("my first test", async () => {
  const { result } = renderHook(() => useUserDetailQuery(1), {
    wrapper: createWrapper()
  })

  await waitFor(() => expect(result.current.isSuccess).toBe(true))

  expect(result.current.data).toBeDefined()

}
}