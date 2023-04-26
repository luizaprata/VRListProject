import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

type ContactItemProps = PropsWithChildren<{
  title: string;
}>;

function ContactItem({title}: ContactItemProps): JSX.Element {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default ContactItem;
