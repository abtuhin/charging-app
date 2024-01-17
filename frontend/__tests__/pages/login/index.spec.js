import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from '@/reducers';
import { login } from '@/states/auth/actions';
import LoginComponent from '@/pages/auth/login';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/config/styles';


jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn(),
}));

jest.mock('@/states/auth/actions', () => ({
  login: jest.fn(),
}));

describe('Login Component', () => {
  let store;
  let mockTheme = theme;

  beforeEach(() => {
    store = configureStore({
      reducer: rootReducer,
      middleware: [thunk],
    });
    jest.clearAllMocks();
  });

  it('should render Login component', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={mockTheme}>
          <LoginComponent />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByText('User Login')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Do not have an account?')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
    
  });

  it('should handle form submission', async () => {
    login.mockResolvedValue({
      data: {
        success: true,
        accessToken: 'token',
        data: { 
          email: "test@gmail.com"
        },
      },
    });

    render(
      <Provider store={store}>
        <ThemeProvider theme={mockTheme}>
          <LoginComponent />
        </ThemeProvider>
      </Provider>
    );

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@gmail.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: '1234' } });
    fireEvent.click(screen.getByText('Login'));

    await waitFor(() => {
      expect(login).toHaveBeenCalledWith({
        email: 'test@gmail.com',
        password: '1234',
      });
    });
  });
});
