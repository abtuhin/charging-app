import { render, fireEvent, waitFor, getByRole } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Home from '@/pages';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
}));

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

const mockStore = configureStore([thunk]);

describe('Home Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: { user: { firstname: 'ab', lastname: 'tuhin' } },
      record: {
        filteredRecords: [{ sessionId: '1', vehicleId: 'BMW2', start: '2024-01-16', end: '2024-01-17', totalCost: 100 }],
        filterOptions: ['XYZ'],
        totalPages: 1,
      },
    });
  });

  it('should render without error', async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

});
