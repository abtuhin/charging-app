import React from 'react';
import Filter from '@/styled/Filter';

const FilterComponent = ({ selectedVehicle, filterOptions, onFilterChange = () => {} }) => {
  return (
    <Filter.FilterContainer>
      <Filter.FilterDropdown value={selectedVehicle} onChange={onFilterChange}>
        <option value="all">All Records</option>
        {filterOptions.map((item, idx) => <option key={idx} value={item}>{item}</option>)}
      </Filter.FilterDropdown>
    </Filter.FilterContainer>
  );
};

export default FilterComponent;
