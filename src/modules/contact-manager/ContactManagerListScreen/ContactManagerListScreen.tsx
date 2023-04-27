import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import ContactItem from './ContactItem';
import useUsersListQuery from '../hooks/useUsersListQuery';
import {RootStackParamList} from '../ContactManagerRoutes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

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
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {isLoading ? (
          <Text>Carregando...</Text>
        ) : (
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            {data?.users.map(user => (
              <ContactItem
                onContactPress={onContactPress}
                testID={`user-${user.id}`}
                key={user.id}
                user={user}
              />
            ))}
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
}

export default ContactManagerListScreen;
