import React from 'react';
import {User} from '@api/types/User';
import type {PropsWithChildren} from 'react';
import {Button, Text, View} from 'react-native';

type ContactItemProps = PropsWithChildren<{
  user: User;
  testID: string;
  onContactPress: (id: number) => void;
}>;

function ContactItem({
  onContactPress,
  user,
  testID,
}: ContactItemProps): JSX.Element {
  return (
    <View testID={testID}>
      <Text>{user.firstName}</Text>
      <Button
        testID={`${testID}-button`}
        title="Mais Detalhes"
        onPress={() => onContactPress(user.id)}
      />
    </View>
  );
}

export default ContactItem;
