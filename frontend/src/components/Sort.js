import React, { useState } from 'react';
import styled from 'styled-components';

const SortContainer = styled.div`
  margin: 16px;
`;

const SortDropdown = styled.select`
  padding: 8px;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`;

const SortComponent = ({options=[], onSortItemChange = () => {}}) => {
  return (
    <SortContainer>
      <SortDropdown onChange={onSortItemChange}>
        {options.map((item, i) => <option key={i} value={item.value}>{item.label}</option>)}
      </SortDropdown>
    </SortContainer>
  );
};

export default SortComponent;