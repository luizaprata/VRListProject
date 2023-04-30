import React from 'react';
import {render, screen, waitFor} from '@testing-library/react-native';

import ContactManagerDetailsScreen from './ContactManagerDetailsScreen';
import {getUsersByIdHandlerException} from '@api/__tests__/get-user-by-id.handler';

const routeMock = {params: {userId: 1}};

describe('Users component', () => {
  it('SHOULD render users list WHEN users detail is fetching', async () => {
    render(<ContactManagerDetailsScreen route={routeMock} />, {
      wrapper: global.createQueryClientWrapper(),
    });
    await waitFor(() =>
      expect(screen.getByText(/Carregando.../i)).toBeVisible(),
    );
  });

  it('SHOULD display the error message WHEN users details api returns an error', async () => {
    global.mswServer.use(getUsersByIdHandlerException);

    render(<ContactManagerDetailsScreen route={routeMock} />, {
      wrapper: global.createQueryClientWrapper(),
    });

    await waitFor(() =>
      expect(
        screen.getByText(/Request failed with status code 500/i),
      ).toBeVisible(),
    );
  });
});
