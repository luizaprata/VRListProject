import React from 'react';
import {render, screen, within} from '@testing-library/react-native';
import {User} from '@api/types/User';
import ContactDetails from './ContactDetails';

describe('ContactDetails component', () => {
  const user: User = {
    id: 1,
    firstName: 'Terry',
    lastName: 'Medhurst',
    email: 'atuny0@sohu.com',
    phone: '+63 791 675 8914',
    birthDate: '2000-12-25',
    image: 'https://robohash.org/hicveldicta.png',
    address: {
      address: '1745 T Street Southeast',
      city: 'Washington',
      postalCode: '20020',
      state: 'DC',
    },
    company: {
      address: {
        address: '629 Debbie Drive',
        city: 'Nashville',
        postalCode: '37076',
        state: 'TN',
      },
      department: 'Marketing',
      name: "Blanda-O'Keefe",
      title: 'Help Desk Operator',
    },
    ein: '20-9487066',
  };

  describe('Section profile', () => {
    beforeEach(() => {
      render(<ContactDetails user={user} />);
    });
    it('SHOULD render section "Perfil"', () => {
      const {getByText} = within(screen.getByTestId('section-profile'));
      expect(getByText('Perfil')).toBeDefined();
    });

    it('SHOULD render field "name"', () => {
      const {getByText} = within(screen.getByTestId('field-name'));
      expect(getByText('Nome')).toBeDefined();
      expect(getByText('Terry')).toBeDefined();
    });

    it('SHOULD render field "lastName"', () => {
      const {getByText} = within(screen.getByTestId('field-lastName'));
      expect(getByText('Sobrenome')).toBeDefined();
      expect(getByText('Medhurst')).toBeDefined();
    });
    it('SHOULD render field "birthDate"', () => {
      const {getByText} = within(screen.getByTestId('field-birthDate'));
      expect(getByText('Data de Nascimento')).toBeDefined();
      expect(getByText('2000-12-25')).toBeDefined();
    });
    it('SHOULD render field "phone"', () => {
      const {getByText} = within(screen.getByTestId('field-phone'));
      expect(getByText('Telefone')).toBeDefined();
      expect(getByText('+63 791 675 8914')).toBeDefined();
    });
    it('SHOULD render field "ein"', () => {
      const {getByText} = within(screen.getByTestId('field-ein'));
      expect(getByText('Identificação do fornecedor')).toBeDefined();
      expect(getByText('20-9487066')).toBeDefined();
    });
  });
  describe('Section company', () => {
    beforeEach(() => {
      render(<ContactDetails user={user} />);
    });
    it('SHOULD render section "Company"', () => {
      const {getByText} = within(screen.getByTestId('section-company'));
      expect(getByText('Empresa')).toBeDefined();
    });

    it('SHOULD render field "name"', () => {
      const {getByText} = within(screen.getByTestId('field-company-name'));
      expect(getByText('Nome')).toBeDefined();
      expect(getByText("Blanda-O'Keefe")).toBeDefined();
    });

    it('SHOULD render field "title"', () => {
      const {getByText} = within(screen.getByTestId('field-company-title'));
      expect(getByText('Cargo')).toBeDefined();
      expect(getByText('Help Desk Operator')).toBeDefined();
    });
    it('SHOULD render field "department"', () => {
      const {getByText} = within(
        screen.getByTestId('field-company-department'),
      );
      expect(getByText('Departamento')).toBeDefined();
      expect(getByText('Marketing')).toBeDefined();
    });
  });
});
