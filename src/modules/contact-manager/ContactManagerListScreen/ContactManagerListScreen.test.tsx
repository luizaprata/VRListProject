import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';

import useUsersListQuery from '../hooks/useUsersListQuery';
import ContactManagerListScreen from './ContactManagerListScreen';

jest.mock('../hooks/useUsersListQuery');
const mockedUseUsersQuery = useUsersListQuery as jest.Mock;

describe('Contact Manager List Screen', () => {
  const navigationMock = {navigate: jest.fn()};

  beforeEach(() => {
    navigationMock.navigate.mockClear();
  });

  it('SHOULD call api WHEN page is loaded', () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      id: 1,
      firstName: 'test user',
    }));
    render(<ContactManagerListScreen navigation={navigationMock} />);
    expect(mockedUseUsersQuery).toHaveBeenCalled();
  });

  it('SHOULD Displays the loading view WHEN users list api is fetching', () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      isLoading: true,
    }));
    render(<ContactManagerListScreen navigation={navigationMock} />);
    expect(screen.getByText(/Carregando.../i)).toBeVisible();
  });

  it('SHOULD display the error message WHEN users list api returns an error', () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      error: {message: 'Error message'},
    }));
    render(<ContactManagerListScreen navigation={navigationMock} />);
    expect(screen.getByText(/Error message/i)).toBeVisible();
  });

  it('SHOULD render users list WHEN users list is loaded', () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      data: {
        users: [
          {id: 1, firstName: 'test user'},
          {id: 2, firstName: 'test user2'},
        ],
      },
    }));
    render(<ContactManagerListScreen navigation={navigationMock} />);
    expect(screen.getByTestId('user-1')).toBeVisible();
    expect(screen.getByTestId('user-1')).toHaveTextContent('test user');

    expect(screen.getByTestId('user-2')).toBeVisible();
    expect(screen.getByTestId('user-2')).toHaveTextContent('test user2');
  });

  it('SHOULD navigate to details screen WHEN the user press button details', () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      data: {
        users: [
          {id: 1, firstName: 'test user'},
          {id: 2, firstName: 'test user2'},
        ],
      },
    }));
    render(<ContactManagerListScreen navigation={navigationMock} />);

    const button = screen.getByTestId('user-1-button');
    fireEvent.press(button);
    expect(navigationMock.navigate).toHaveBeenCalledWith(
      'ContactManagerDetails',
      {userId: 1},
    );
  });
});
