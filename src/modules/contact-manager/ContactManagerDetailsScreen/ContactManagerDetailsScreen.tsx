import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';
import useUserDetailQuery from './useUserDetailQuery';

function ContactManagerDetailsScreen(): JSX.Element {
  const { isLoading, data, error } = useUserDetailQuery();

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
            <Text>Details</Text>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
}

export default ContactManagerDetailsScreen;
