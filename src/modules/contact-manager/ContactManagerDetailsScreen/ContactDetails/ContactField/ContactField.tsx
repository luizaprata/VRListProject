import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import styles from './ContactField.styles';

type ContactDetailProps = PropsWithChildren<{
  label: string;
  value: string;
  testID: string;
}>;

function ContactDetails({
  label,
  value,
  testID,
}: ContactDetailProps): JSX.Element {
  return (
    <View style={styles.container} testID={testID}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

export default ContactDetails;
