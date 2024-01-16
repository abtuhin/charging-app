import React, { useState } from 'react';
import styled from 'styled-components';
import Text from './Text';

const FilterContainer = styled.div`
  margin: 8px;
`;

const FilterDropdown = styled.select`
  padding: 8px;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`;

const DropdownFilterComponent = ({ selectedVehicle, filterOptions, onFilterChange = () => {} }) => {
  return (
    <FilterContainer>
      <FilterDropdown value={selectedVehicle} onChange={onFilterChange}>
        <option value="all">All Records</option>
        {filterOptions.map((item, idx) => <option key={idx} value={item}>{item}</option>)}
      </FilterDropdown>
    </FilterContainer>
  );
};

export default DropdownFilterComponent;
