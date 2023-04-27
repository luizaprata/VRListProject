import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text, Button, View} from 'react-native';
import {User} from 'src/types/User';

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
