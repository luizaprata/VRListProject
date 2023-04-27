import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';
import useUserDetailQuery from '../hooks/useUserDetailQuery';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../ContactManagerRoutes';

type Props = NativeStackScreenProps<RootStackParamList, 'ContactManagerDetails'>;

function ContactManagerDetailsScreen({ route }: Props) {

  const { userId } = route.params
  const { isLoading, data, error } = useUserDetailQuery(userId);

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
