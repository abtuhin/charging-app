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

const SortRadio = ({ options=[], sortOrder="asc", onOrderChange = () => {} }) => {
  return (
    <RadioContainer>
      {
        options.map((item, idx) => (
          <RadioLabel key={idx}>
            <RadioInput
              type="radio"
              value={item.value}
              checked={sortOrder === item.value}
              onChange={onOrderChange}
            />
            <RadioText>{item.label}</RadioText>
          </RadioLabel>
        ))
      }
    </RadioContainer>
  );
};

export default SortRadio;
