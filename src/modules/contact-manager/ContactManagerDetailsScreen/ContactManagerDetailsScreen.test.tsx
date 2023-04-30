import React from 'react';
import {render, screen, waitFor, within} from '@testing-library/react-native';
import ContactManagerDetailsScreen from './ContactManagerDetailsScreen';

jest.useFakeTimers();
const routeMock = {params: {userId: 1}};

describe('ContactManagerDetailsScreen', () => {
  it('SHOULD display loading WHEN users detail is fetching', async () => {
    render(<ContactManagerDetailsScreen route={routeMock} />, {
      wrapper: global.createQueryClientWrapper(),
    });
    await waitFor(() =>
      expect(screen.getByText(/Carregando.../i)).toBeOnTheScreen(),
    );
  });

  it('SHOULD display the error message WHEN users details api returns an error', async () => {
    global.mswServer.use(global.getUsersByIdHandlerException);

    render(<ContactManagerDetailsScreen route={routeMock} />, {
      wrapper: global.createQueryClientWrapper(),
    });

    await waitFor(() =>
      expect(
        screen.getByText(/Request failed with status code 500/i),
      ).toBeOnTheScreen(),
    );
  });

  describe('Section profile', () => {
    let result;
    beforeEach(() => {
      result = render(<ContactManagerDetailsScreen route={routeMock} />, {
        wrapper: global.createQueryClientWrapper(),
      });
    });
    it('SHOULD render section "Perfil"', async () => {
      const elm = await waitFor(() => screen.getByTestId('section-profile'));
      const {getByText} = within(elm);
      expect(getByText('Perfil')).toBeOnTheScreen();
    });

    it('SHOULD render field "name"', async () => {
      const elm = await waitFor(() => screen.getByTestId('field-name'));
      const {getByText} = within(elm);
      expect(getByText('Nome')).toBeDefined();
      expect(getByText('Terry')).toBeDefined();
    });

    it('SHOULD render field "lastName"', async () => {
      const elm = await waitFor(() => screen.getByTestId('field-lastName'));
      const {getByText} = within(elm);
      expect(getByText('Sobrenome')).toBeDefined();
      expect(getByText('Medhurst')).toBeDefined();
    });
    it('SHOULD render field "birthDate"', async () => {
      const elm = await waitFor(() => screen.getByTestId('field-birthDate'));
      const {getByText} = within(elm);
      expect(getByText('Data de Nascimento')).toBeDefined();
      expect(getByText('2000-12-25')).toBeDefined();
    });
    it('SHOULD render field "phone"', async () => {
      const elm = await waitFor(() => screen.getByTestId('field-phone'));
      const {getByText} = within(elm);
      expect(getByText('Telefone')).toBeDefined();
      expect(getByText('+63 791 675 8914')).toBeDefined();
    });
    it('SHOULD render field "ein"', async () => {
      const elm = await waitFor(() => screen.getByTestId('field-ein'));
      const {getByText} = within(elm);
      expect(getByText('Identificação do fornecedor')).toBeDefined();
      expect(getByText('20-9487066')).toBeDefined();
    });
  });
  describe('Section company', () => {
    beforeEach(() => {
      render(<ContactManagerDetailsScreen route={routeMock} />, {
        wrapper: global.createQueryClientWrapper(),
      });
    });
    it('SHOULD render section "Company"', async () => {
      const elm = await waitFor(() => screen.getByTestId('section-company'));
      const {getByText} = within(elm);
      expect(getByText('Empresa')).toBeDefined();
    });

    it('SHOULD render field "name"', async () => {
      const elm = await waitFor(() => screen.getByTestId('field-company-name'));
      const {getByText} = within(elm);
      expect(getByText('Nome')).toBeDefined();
      expect(getByText("Blanda-O'Keefe")).toBeDefined();
    });

    it('SHOULD render field "title"', async () => {
      const elm = await waitFor(() =>
        screen.getByTestId('field-company-title'),
      );
      const {getByText} = within(elm);
      expect(getByText('Cargo')).toBeDefined();
      expect(getByText('Help Desk Operator')).toBeDefined();
    });
    it('SHOULD render field "department"', async () => {
      const elm = await waitFor(() =>
        screen.getByTestId('field-company-department'),
      );
      const {getByText} = within(elm);
      expect(getByText('Departamento')).toBeDefined();
      expect(getByText('Marketing')).toBeDefined();
    });
  });
});
