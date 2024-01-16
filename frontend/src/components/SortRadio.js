import React, { useState } from 'react';
import styled from 'styled-components';

const RadioContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RadioInput = styled.input`
  margin-right: 8px;
`;

const RadioText = styled.span`
  font-size: 12px;
`;

const SortRadio = () => {
  const [sortOrder, setSortOrder] = useState('asc');

  const handleRadioChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <RadioContainer>
      <RadioLabel>
        <RadioInput
          type="radio"
          value="asc"
          checked={sortOrder === 'asc'}
          onChange={handleRadioChange}
        />
        <RadioText>Asc</RadioText>
      </RadioLabel>

      <RadioLabel>
        <RadioInput
          type="radio"
          value="desc"
          checked={sortOrder === 'desc'}
          onChange={handleRadioChange}
        />
        <RadioText>Desc</RadioText>
      </RadioLabel>
    </RadioContainer>
  );
};

export default SortRadio;
