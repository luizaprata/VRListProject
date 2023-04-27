import {fireEvent, render, screen} from '@testing-library/react-native';
import ContactManagerListScreen from './ContactManagerListScreen';
import useUsersListQuery from '../hooks/useUsersListQuery';

jest.mock('../hooks/useUsersListQuery');
const mockedUseUsersQuery = useUsersListQuery as jest.Mock;

describe('Users component', () => {
  const navigationMock = {navigate: jest.fn()};

  beforeEach(() => {
    navigationMock.navigate.mockClear();
  });

  it('Displays the loading view', () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      isLoading: true,
    }));
    render(<ContactManagerListScreen navigation={navigationMock} />);
    expect(screen.getByText(/Carregando.../i)).toBeVisible();
  });

  it('Displays the error message', () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      error: {message: 'Error message'},
    }));
    render(<ContactManagerListScreen navigation={navigationMock} />);
    expect(screen.getByText(/Error message/i)).toBeVisible();
  });

  it('should render users list', () => {
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

  it('should navigate to details screen whe click to users button', () => {
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
