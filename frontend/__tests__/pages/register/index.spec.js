import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from '@/reducers';
import { register } from '@/states/auth/actions';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/config/styles';
import RegisterComponent from '@/pages/auth/register';
import formValidator from '@/utils/formValidator';
import { act } from 'react-dom/test-utils';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    replace: jest.fn(),
  }),
}));

jest.mock('@/states/auth/actions', () => ({
  register: jest.fn(),
}));

jest.mock('@/utils/formValidator', () => jest.fn());

describe('Register Component', () => {
  let store;
  let mockTheme = theme;

  beforeEach(() => {
    store = configureStore({
      reducer: rootReducer,
      middleware: [thunk],
    });
    jest.clearAllMocks();
  });

  it('should render Register component', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={mockTheme}>
          <RegisterComponent />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByText('User Registration')).toBeInTheDocument();
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();

    expect(screen.getByText('Register')).toBeInTheDocument();
    expect(screen.getByText('Already have an account?')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    
  });

  it('should handle form submission', async () => {
    register.mockResolvedValue({
      data: {
        success: true,
        data: { 
          email: "test@gmail.com"
        },
      },
    });

    formValidator.mockReturnValue({});

    render(
      <Provider store={store}>
        <ThemeProvider theme={mockTheme}>
          <RegisterComponent />
        </ThemeProvider>
      </Provider>
    );
    
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'test' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'test' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@gmail.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: '1234' } });
    fireEvent.change(screen.getByLabelText('Confirm Password'), { target: { value: '1234' } });

    fireEvent.click(screen.getByText('Register'));
    
    await waitFor(() => {
      expect(register).toHaveBeenCalledWith({
        firstname: "test",
        lastname: "test",
        email: 'test@gmail.com',
        password: '1234',
      });

      expect(formValidator).toHaveBeenCalledWith({
        firstname: "test",
        lastname: "test",
        email: 'test@gmail.com',
        password: '1234',
        confirmPassword: '1234'
      });
    });
  });
});
