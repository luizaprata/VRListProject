import React from 'react';
import {User} from '@api/types/User';
import type {PropsWithChildren} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './ContactDetails.styles';

type ContactDetailProps = PropsWithChildren<{
  user: User;
}>;

function ContactDetails({user}: ContactDetailProps): JSX.Element {
  return (
    <View style={styles.userContainer}>
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
    </View>
  );
}

export default ContactDetails;
