import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ContactManagerListScreen from './modules/contact-manager/ContactManagerListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactManagerDetailsScreen from './modules/contact-manager/ContactManagerDetailsScreen';

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
        <Stack.Navigator initialRouteName="ContactManager">
          <Stack.Screen
            name="ContactManager"
            component={ContactManagerListScreen}
            options={{ title: 'Contatos' }}
          />
          <Stack.Screen
            name="ContactManager--details"
            component={ContactManagerDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
