import React from 'react';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import ContactManagerListScreen from './ContactManagerListScreen';

describe('ContactManagerListScreen', () => {
  const navigationMock = {navigate: jest.fn()};

  beforeEach(() => {
    navigationMock.navigate.mockClear();
  });

  it('SHOULD display loading WHEN users list api is fetching', async () => {
    render(<ContactManagerListScreen navigation={navigationMock} />, {
      wrapper: global.createQueryClientWrapper(),
    });

    await waitFor(() =>
      expect(screen.getByText(/Carregando.../i)).toBeOnTheScreen(),
    );
  });

  it('SHOULD display the error message WHEN users details api returns an error', async () => {
    global.mswServer.use(global.getAllUsersHandlerException);

    render(<ContactManagerListScreen navigation={navigationMock} />, {
      wrapper: global.createQueryClientWrapper(),
    });

    await waitFor(() =>
      expect(
        screen.getByText(/Request failed with status code 500/i),
      ).toBeOnTheScreen(),
    );
  });

  it('SHOULD navigate to details screen WHEN the user press button details', async () => {
    render(<ContactManagerListScreen navigation={navigationMock} />, {
      wrapper: global.createQueryClientWrapper(),
    });
    const button = await waitFor(() => screen.getByTestId('user-1'));
    act(() => {
      fireEvent.press(button);
    });
    expect(navigationMock.navigate).toHaveBeenCalledWith(
      'ContactManagerDetails',
      {userId: 1},
    );
  });
});

// it('SHOULD call api WHEN has searched new term', async () => {
//   render(<ContactManagerListScreen navigation={navigationMock} />, {
//     wrapper: global.createQueryClientWrapper(),
//   });
//   const inputNode = await screen.findByTestId('contact-search-bar');
//   fireEvent.changeText(inputNode, 'new value');

//   expect(mockedUseUsersQuery).toHaveBeenCalledWith('new value');
// });
// it('SHOULD display users list WHEN users list is loaded', () => {
//   mockedUseUsersQuery.mockImplementation(() => ({
//     data: {
//       users: [
//         {id: 1, firstName: 'test user'},
//         {id: 2, firstName: 'test user2'},
//       ],
//     },
//   }));
//   render(<ContactManagerListScreen navigation={navigationMock} />);
//   expect(screen.getByTestId('user-1')).toBeVisible();
//   expect(screen.getByTestId('user-1')).toHaveTextContent('test user');

//   expect(screen.getByTestId('user-2')).toBeVisible();
//   expect(screen.getByTestId('user-2')).toHaveTextContent('test user2');
// });
