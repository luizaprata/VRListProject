import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, } from "@testing-library/react-native";
import ContactManagerListScreen from "./ContactManagerListScreen";
import useAllUsersQuery from "./useUsersListApi";

jest.mock("./useAllUsersQuery")
const mockedUseUsersQuery = useAllUsersQuery as jest.Mock;

describe("Users component", () => {
  it("Displays the loading view", () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      isLoading: true,
    }));
    render(<ContactManagerListScreen />);
    expect(screen.getByText(/Carregando.../i)).toBeVisible();
  });

  it("Displays the error message", () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      error: { message: "Error message" },
    }));
    render(<ContactManagerListScreen />);
    expect(screen.getByText(/Error message/i)).toBeVisible();
  });

  it("should render users list", () => {
    mockedUseUsersQuery.mockImplementation(() => ({
      data: {
        users: [
          { id: 1, firstName: "test user" },
          { id: 2, firstName: "test user2" },
        ]
      }
    }));
    render(<ContactManagerListScreen />);
    expect(screen.getByTestId("user-1")).toBeVisible();
    expect(screen.getByTestId("user-1")).toHaveTextContent("test user");

    expect(screen.getByTestId("user-2")).toBeVisible();
    expect(screen.getByTestId("user-2")).toHaveTextContent("test user2");
  });
});