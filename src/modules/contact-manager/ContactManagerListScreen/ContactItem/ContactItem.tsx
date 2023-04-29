import React from 'react';
import {User} from '@api/types/User';
import type {PropsWithChildren} from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import styles from './ContactItem.styles';

type ContactItemProps = PropsWithChildren<{
  user: User;
  onContactPress: (id: number) => void;
}>;

function ContactItem({onContactPress, user}: ContactItemProps): JSX.Element {
  return (
    <TouchableOpacity
      testID={`user-${user.id}`}
      onPress={() => onContactPress(user.id)}
      style={styles.userContainer}>
      <Image
        style={styles.avatar}
        source={{
          uri: user.image,
        }}
      />
      <Text style={styles.text}>
        {user.firstName} {user.lastName}
      </Text>
      <Text style={styles.arrow}>{'>'}</Text>
    </TouchableOpacity>
  );
}

export default ContactItem;
