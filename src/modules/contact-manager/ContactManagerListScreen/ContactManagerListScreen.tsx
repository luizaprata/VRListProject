import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ContactItem from './ContactItem';
import useAllUsersData from './useAllUsersData';

function ContactManagerListScreen(): JSX.Element {
  const {isLoading, data, error} = useAllUsersData();

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      {isLoading ? (
        <Text>Carregando...</Text>
      ) : (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <ContactItem title="Step One" />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

export default ContactManagerListScreen;
