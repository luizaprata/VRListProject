import React from 'react';
import DefaultLayout from '@components/Layout/DefaultLayout';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScrollView, Text} from 'react-native';

import {RootStackParamList} from '../ContactManagerRoutes';
import useUsersListQuery from '../hooks/useUsersListQuery';
import ContactItem from './ContactItem';

type Props = NativeStackScreenProps<RootStackParamList, 'ContactManager'>;

function ContactManagerListScreen({navigation}: Props): JSX.Element {
  const {isLoading, data, error} = useUsersListQuery();

  if (error) {
    return <Text>{error.message}</Text>;
  }

  const onContactPress = (userId: number) => {
    navigation.navigate('ContactManagerDetails', {userId});
  };

  return (
    <DefaultLayout>
      {isLoading ? (
        <Text>Carregando...</Text>
      ) : (
        <>
          {data?.users.map(user => (
            <ContactItem
              onContactPress={onContactPress}
              testID={`user-${user.id}`}
              key={user.id}
              user={user}
            />
          ))}
        </>
      )}
    </DefaultLayout>
  );
}

export default ContactManagerListScreen;
