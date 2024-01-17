import React from 'react';
import SortOrder from '@/styled/SortOrder';

const SortComponent = ({options=[], onSortItemChange = () => {}}) => {
  return (
    <SortOrder.SortContainer>
      <SortOrder.SortDropdown data-testid="sortDropdown" onChange={onSortItemChange}>
        {options.map((item, i) => <option key={i} value={item.value}>{item.label}</option>)}
      </SortOrder.SortDropdown>
    </SortOrder.SortContainer>
  );
};

export default SortComponent;