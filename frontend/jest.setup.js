import '@testing-library/jest-dom';
import 'jest-styled-components';

global.ResizeObserver = jest.fn(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
}));