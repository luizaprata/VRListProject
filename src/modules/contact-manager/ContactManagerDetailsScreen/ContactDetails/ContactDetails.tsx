import React from 'react';
import {User} from '@api/types/User';
import type {PropsWithChildren} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import styles from './ContactDetails.styles';
import ContactSection from '../ContactSection';
import ContactField from '../ContactField';
import Separator from '@components/Separator';

type ContactDetailProps = PropsWithChildren<{
  user: User;
}>;

function ContactDetails({user}: ContactDetailProps): JSX.Element {
  const dimensions = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Image
        style={[{width: dimensions.width}, styles.avatar]}
        resizeMode="contain"
        source={{
          uri: user.image,
        }}
      />
      <View style={styles.infoContainer}>
        <ContactSection legend="Perfil">
          <ContactField label="Nome" value={user.firstName} />
          <ContactField label="Sobrenome" value={user.lastName} />
          <ContactField label="Data de Nascimento" value={user.birthDate} />
          <ContactField label="Telefone" value={user.phone} />
          <ContactField label="Identificação do fornecedor" value={user.ein} />
        </ContactSection>
        <Separator />
        <ContactSection legend="Empresa">
          <ContactField label="Nome" value={user.company.name} />
          <ContactField label="Cargo" value={user.company.title} />
          <ContactField label="Departamento" value={user.company.department} />
        </ContactSection>
      </View>
    </View>
  );
}

export default ContactDetails;
