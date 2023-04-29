import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScrollView, Text} from 'react-native';

import {RootStackParamList} from '../ContactManagerRoutes';
import useUserDetailQuery from '../hooks/useUserDetailQuery';
import DefaultLayout from '@components/Layout/DefaultLayout';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'ContactManagerDetails'
>;

function ContactManagerDetailsScreen({route}: Props) {
  const {userId} = route.params;
  const {isLoading, data, error} = useUserDetailQuery(userId);

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <DefaultLayout>
      {isLoading ? (
        <Text>Carregando...</Text>
      ) : (
        <Text>{JSON.stringify(data, null, ' ')}</Text>
      )}
    </DefaultLayout>
  );
}

export default ContactManagerDetailsScreen;
