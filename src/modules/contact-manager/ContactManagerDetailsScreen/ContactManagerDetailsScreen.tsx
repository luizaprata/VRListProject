import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';

import {RootStackParamList} from '../ContactManagerRoutes';
import useUserDetailQuery from '../hooks/useUserDetailQuery';

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
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {isLoading ? (
          <Text>Carregando...</Text>
        ) : (
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text>{JSON.stringify(data, null, ' ')}</Text>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
}

export default ContactManagerDetailsScreen;
