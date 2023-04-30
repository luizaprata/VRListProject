import React from 'react';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
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

  it('SHOULD display users list WHEN users list is loaded', async () => {
    render(<ContactManagerListScreen navigation={navigationMock} />, {
      wrapper: global.createQueryClientWrapper(),
    });

    const elm1 = await waitFor(() => screen.getByTestId('user-1'));
    const {getByText: textElm1} = within(elm1);
    expect(textElm1('Terry Medhurst')).toBeOnTheScreen();

    const elm2 = await waitFor(() => screen.getByTestId('user-28'));
    const {getByText: textElm2} = within(elm2);
    expect(textElm2('Kody Terry')).toBeOnTheScreen();
  });

  it('SHOULD call api WHEN has searched new term', async () => {
    render(<ContactManagerListScreen navigation={navigationMock} />, {
      wrapper: global.createQueryClientWrapper(),
    });
    const inputNode = await screen.findByTestId('contact-search-bar');
    fireEvent.changeText(inputNode, 'new value');

    const elm = await waitFor(() => screen.getByTestId('user-2'));
    const {getByText} = within(elm);
    expect(getByText('Sheldon Quigley')).toBeOnTheScreen();
  });
});
