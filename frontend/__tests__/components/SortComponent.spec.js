import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SortComponent from '@/components/SortComponent';

describe('SortComponent', () => {
  it('should render the component with options and handle change event', () => {
    const onSortItemChangeMock = jest.fn();
    const options = [
      { label: 'Start Time', value: 'start' },
      { label: 'End Time', value: 'end' },
      { label: 'Total Cost', value: 'totalCost' },
    ];

    render(<SortComponent options={options} onSortItemChange={onSortItemChangeMock} />);

    const dropdown = screen.getByTestId('sortDropdown');
    fireEvent.change(dropdown, { target: { value: 'totalCost' } });

    expect(onSortItemChangeMock.mock.calls[0][0].target.value).toBe('totalCost');
  });
});
