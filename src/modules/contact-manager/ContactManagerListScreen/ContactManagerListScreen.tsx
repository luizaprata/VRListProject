import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlatList, Text} from 'react-native';

import {RootStackParamList} from '../ContactManagerRoutes';
import useUsersListQuery from '../hooks/useUsersListQuery';
import ContactItem from './ContactItem';
import Separator from '@components/Separator';
import DefaultLayout from '@components/Layout/DefaultLayout';
import SearchBar from '@components/SearchBar';

type Props = NativeStackScreenProps<RootStackParamList, 'ContactManager'>;

function ContactManagerListScreen({navigation}: Props): JSX.Element {
  const [newSearchPhrase, setNewSearchPhrase] = useState('');
  const {isLoading, data, error} = useUsersListQuery(newSearchPhrase);

  if (error) {
    return <Text>{error.message}</Text>;
  }

  const onContactPress = (userId: number) => {
    navigation.navigate('ContactManagerDetails', {userId});
  };

  return (
    <DefaultLayout>
      <SearchBar onChange={searchPhrase => setNewSearchPhrase(searchPhrase)} />
      {isLoading ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          contentContainerStyle={{paddingBottom: 80}}
          data={data?.users}
          keyExtractor={item => `userKey-${item.id}`}
          ItemSeparatorComponent={Separator}
          renderItem={listInfo => (
            <ContactItem onContactPress={onContactPress} user={listInfo.item} />
          )}
        />
      )}
    </DefaultLayout>
  );
}

export default ContactManagerListScreen;
