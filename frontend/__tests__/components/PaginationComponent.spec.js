import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PaginationComponent from '@/components/PaginationComponent';

const mockOnPageChange = jest.fn();

const mockProps = {
  totalPages: 5,
  currentPage: 3,
  onPageChange: mockOnPageChange,
};

test('PaginationComponent should render with page buttons and handle click', () => {
  const { getByText, getByTestId } = render(<PaginationComponent {...mockProps} />);
  
  expect(getByText('3')).toHaveAttribute('data-active', 'true');

  for (let i = 1; i <= mockProps.totalPages; i++) {
    expect(getByText(i.toString())).toBeInTheDocument();
  }

  fireEvent.click(getByText('2'));

  expect(mockOnPageChange).toHaveBeenCalledWith(2);

  fireEvent.click(getByTestId('pagination-next-button'));

  expect(mockOnPageChange).toHaveBeenCalledWith(4);

  fireEvent.click(getByTestId('pagination-prev-button'));

  expect(mockOnPageChange).toHaveBeenCalledWith(2);
});
