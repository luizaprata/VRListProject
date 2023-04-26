import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {SafeAreaView} from 'react-native';
import ContactManagerListScreen from './modules/contact-manager/ContactManagerListScreen';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <ContactManagerListScreen />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

export default App;
