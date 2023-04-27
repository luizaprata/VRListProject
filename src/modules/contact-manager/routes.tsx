import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactManagerDetailsScreen from './ContactManagerDetailsScreen';
import ContactManagerListScreen from './ContactManagerListScreen';

export type RootStackParamList = {
  ContactManager: undefined;
  ContactManagerDetails: { userId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function ContactManagerRoutes(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="ContactManager">
      <Stack.Screen
        name="ContactManager"
        component={ContactManagerListScreen}
        options={{ title: 'Contatos' }}
      />
      <Stack.Screen
        name="ContactManagerDetails"
        component={ContactManagerDetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default ContactManagerRoutes;
