import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterComponent from '@/components/FilterComponent';

describe('FilterComponent', () => {
  it('should render the component with options and handle change event', () => {
    const filterOptions = ['BMW2', 'PORSCHR1', 'AUDI3'];
    const selectedVehicle = 'PORSCHR1';
    const onFilterChangeMock = jest.fn();

    render(
      <FilterComponent
        selectedVehicle={selectedVehicle}
        filterOptions={filterOptions}
        onFilterChange={onFilterChangeMock}
      />
    );
    
    const dropdown = screen.getByRole('combobox');
    expect(dropdown).toBeInTheDocument();

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(filterOptions.length + 1);

    expect(dropdown).toHaveValue(selectedVehicle);

    fireEvent.change(dropdown, { target: { value: 'PORSCHR1' } });
    expect(onFilterChangeMock.mock.calls[0][0].target.value).toBe('PORSCHR1');

  });
});
