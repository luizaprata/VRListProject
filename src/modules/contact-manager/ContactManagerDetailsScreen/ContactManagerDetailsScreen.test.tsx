import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
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

  it('Displays the loading view', () => {
    mockedUseUserDetailQuery.mockImplementation(() => ({
      isLoading: true,
    }));
    render(<ContactManagerDetailsScreen route={routeMock} />);
    expect(screen.getByText(/Carregando.../i)).toBeVisible();
  });

  it('Displays the error message', () => {
    mockedUseUserDetailQuery.mockImplementation(() => ({
      error: {message: 'Error message'},
    }));
    render(<ContactManagerDetailsScreen route={routeMock} />);
    expect(screen.getByText(/Error message/i)).toBeVisible();
  });

  it('should call user details query', () => {
    mockedUseUserDetailQuery.mockImplementation(() => ({
      id: 1,
      firstName: 'test user',
    }));
    render(<ContactManagerDetailsScreen route={routeMock} />);
    expect(mockedUseUserDetailQuery).toHaveBeenCalledWith(1);
  });
});
