import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlatList, Text} from 'react-native';

import {RootStackParamList} from '../ContactManagerRoutes';
import useUsersListQuery from '../hooks/useUsersListQuery';
import ContactItem from './ContactItem';
import Separator from '@components/Separator';
import DefaultLayout from '@components/Layout/DefaultLayout';

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
        <FlatList
          data={data.users}
          keyExtractor={item => `userKey-${item.id}`}
          ItemSeparatorComponent={<Separator />}
          renderItem={item => (
            <ContactItem onContactPress={onContactPress} listInfo={item} />
          )}
        />
      )}
    </DefaultLayout>
  );
}

export default ContactManagerListScreen;
