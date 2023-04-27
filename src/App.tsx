import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { SafeAreaView } from 'react-native';
import ContactManagerListScreen from './modules/contact-manager/ContactManagerListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

if (__DEV__) {
  import('react-query-native-devtools').then(({ addPlugin }) => {
    addPlugin({ queryClient });
  });
}

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ContactManager" component={ContactManagerListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
