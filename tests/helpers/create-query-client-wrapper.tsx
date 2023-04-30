import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';

global.createQueryClientWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return ({children}) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
