import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import styles from './ContactSection.styles';

type ContactDetailProps = PropsWithChildren<{
  legend: string;
  testID: string;
}>;

function ContactSection({
  legend,
  testID,
  children,
}: ContactDetailProps): JSX.Element {
  return (
    <View style={styles.container} testID={testID}>
      <Text style={styles.label}>{legend}</Text>
      {children}
    </View>
  );
}

export default ContactSection;
