import React from 'react';
import {render, screen} from '@testing-library/react-native';
import ContactManagerDetailsScreen from './ContactManagerDetailsScreen';
import useUserDetailQuery from '../hooks/useUserDetailQuery';

jest.mock('../hooks/useUserDetailQuery');
const mockedUseUserDetailQuery = useUserDetailQuery as jest.Mock;
const routeMock = {params: {userId: 1}};

describe('Users component', () => {
  afterEach(() => {
    mockedUseUserDetailQuery.mockClear();
  });

  it('SHOULD call api WHEN page is loaded', () => {
    mockedUseUserDetailQuery.mockImplementation(() => ({
      id: 1,
      firstName: 'test user',
    }));
    render(<ContactManagerDetailsScreen route={routeMock} />);
    expect(mockedUseUserDetailQuery).toHaveBeenCalledWith(1);
  });

  it('SHOULD render users list WHEN users detail is fetching', () => {
    mockedUseUserDetailQuery.mockImplementation(() => ({
      isLoading: true,
    }));
    render(<ContactManagerDetailsScreen route={routeMock} />);
    expect(screen.getByText(/Carregando.../i)).toBeVisible();
  });

  it('SHOULD display the error message WHEN users details api returns an error', () => {
    mockedUseUserDetailQuery.mockImplementation(() => ({
      error: {message: 'Error message'},
    }));
    render(<ContactManagerDetailsScreen route={routeMock} />);
    expect(screen.getByText(/Error message/i)).toBeVisible();
  });
});
