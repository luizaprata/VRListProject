import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';
import ContactItem from './ContactItem';
import useAllUsersQuery from './useAllUsersQuery';

function ContactManagerListScreen(): JSX.Element {
  const { isLoading, data, error } = useAllUsersQuery();

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {isLoading ? (
          <Text>Carregando...</Text>
        ) : (
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            {data?.users.map(user => (
              <ContactItem testID={`user-${user.id}`} key={user.id} title={user.firstName} />
            ))}
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
}

export default ContactManagerListScreen;
