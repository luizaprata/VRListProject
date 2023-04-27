import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, } from "@testing-library/react-native";
import ContactManagerDetailsScreen from "./ContactManagerDetailsScreen";
import useUserDetailQuery from "../hooks/useUserDetailQuery";

jest.mock("../hooks/useUserDetailQuery")
const mockedUseUserDetailQuery = useUserDetailQuery as jest.Mock;
const routeMock = { param: { userId: 0 } }

describe("Users component", () => {
  it("Displays the loading view", () => {
    mockedUseUserDetailQuery.mockImplementation(() => ({
      isLoading: true,
    }));
    render(<ContactManagerDetailsScreen route={routeMock} />);
    expect(screen.getByText(/Carregando.../i)).toBeVisible();
  });

  it("Displays the error message", () => {
    mockedUseUserDetailQuery.mockImplementation(() => ({
      error: { message: "Error message" },
    }));
    render(<ContactManagerDetailsScreen />);
    expect(screen.getByText(/Error message/i)).toBeVisible();
  });

  it("should render users list", () => {
    mockedUseUserDetailQuery.mockImplementation(() => ({
      data: {
        users: [
          { id: 1, firstName: "test user" },
          { id: 2, firstName: "test user2" },
        ]
      }
    }));
    render(<ContactManagerDetailsScreen />);
    expect(screen.getByTestId("user-1")).toBeVisible();
    expect(screen.getByTestId("user-1")).toHaveTextContent("test user");

    expect(screen.getByTestId("user-2")).toBeVisible();
    expect(screen.getByTestId("user-2")).toHaveTextContent("test user2");
  });
});