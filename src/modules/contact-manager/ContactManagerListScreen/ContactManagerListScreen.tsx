import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';
import ContactItem from './ContactItem';
import useUsersListApi from '../hooks/useUsersListApi';

function ContactManagerListScreen({ navigation }): JSX.Element {
  const { isLoading, data, error } = useUsersListApi();

  if (error) {
    return <Text>{error.message}</Text>;
  }

  const onContactPress = (userId: number) => {
    navigation.navigate("ContactManagerDetails", { userId })
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
              <ContactItem onContactPress={onContactPress} testID={`user-${user.id}`} key={user.id} user={user} />
            ))}
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
}

export default ContactManagerListScreen;
