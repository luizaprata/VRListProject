import React from 'react';
import type { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

type ContactItemProps = PropsWithChildren<{
  title: string;
  testID: string
}>;

function ContactItem({ title, testID }: ContactItemProps): JSX.Element {
  return (
    <View testID={testID}>
      <Text>{title}</Text>
    </View>
  );
}

export default ContactItem;
