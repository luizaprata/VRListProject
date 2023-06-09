import React from 'react';
import ContactManagerRoutes from '@modules/contact-manager/ContactManagerRoutes';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
// if (__DEV__) {
//   import('react-query-native-devtools').then(({addPlugin}) => {
//     addPlugin({queryClient});
//   });
// }

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <ContactManagerRoutes />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
