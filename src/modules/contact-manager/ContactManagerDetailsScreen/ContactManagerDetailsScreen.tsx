import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScrollView, Text} from 'react-native';

import {RootStackParamList} from '../ContactManagerRoutes';
import useUserDetailQuery from '../hooks/useUserDetailQuery';
import DefaultLayout from '@components/Layout/DefaultLayout';
import ContactDetails from './ContactDetails';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'ContactManagerDetails'
>;

function ContactManagerDetailsScreen({route}: Props) {
  const {userId} = route.params;
  const {status, data, error} = useUserDetailQuery(userId);

  return (
    <DefaultLayout>
      {status === 'error' ? (
        <Text>{error.message}</Text>
      ) : status === 'loading' ? (
        <Text>Carregando...</Text>
      ) : (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <ContactDetails user={data} />
        </ScrollView>
      )}
    </DefaultLayout>
  );
}

export default ContactManagerDetailsScreen;
