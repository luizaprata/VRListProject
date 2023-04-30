import React from 'react';
import {User} from '@api/types/User';
import type {PropsWithChildren} from 'react';
import {Dimensions, Image, View} from 'react-native';
import styles from './ContactDetails.styles';
import ContactSection from './ContactSection';
import ContactField from './ContactField';
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
        <ContactSection legend="Perfil" testID="section-profile">
          <ContactField
            label="Nome"
            value={user.firstName}
            testID="field-name"
          />
          <ContactField
            label="Sobrenome"
            value={user.lastName}
            testID="field-lastName"
          />
          <ContactField
            label="Data de Nascimento"
            value={user.birthDate}
            testID="field-birthDate"
          />
          <ContactField
            label="Telefone"
            value={user.phone}
            testID="field-phone"
          />
          <ContactField
            label="Identificação do fornecedor"
            value={user.ein}
            testID="field-ein"
          />
        </ContactSection>
        <Separator />
        <ContactSection legend="Empresa" testID="section-company">
          <ContactField
            label="Nome"
            value={user.company.name}
            testID="field-company-name"
          />
          <ContactField
            label="Cargo"
            value={user.company.title}
            testID="field-company-title"
          />
          <ContactField
            label="Departamento"
            value={user.company.department}
            testID="field-company-department"
          />
        </ContactSection>
      </View>
    </View>
  );
}

export default ContactDetails;
