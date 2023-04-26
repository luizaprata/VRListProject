import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';
import ContactItem from './ContactItem';
import useAllUsersData from './useAllUsersData';

function ContactManagerListScreen(): JSX.Element {
  const { isLoading, data, error } = useAllUsersData();

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      {isLoading ? (
        <Text>Carregando...</Text>
      ) : (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {data?.users.map(item => (
            <ContactItem key={item.id} title={item.firstName} />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

export default ContactManagerListScreen;
