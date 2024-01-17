import React from 'react';
import SortOrder from '@/styled/SortOrder';

const OrderComponent = ({ options=[], sortOrder="asc", onOrderChange = () => {} }) => {
  return (
    <SortOrder.RadioContainer>
      {
        options.map((item, idx) => (
          <SortOrder.RadioLabel key={idx}>
            <SortOrder.RadioInput
              type="radio"
              value={item.value}
              checked={sortOrder === item.value}
              onChange={onOrderChange}
            />
            <SortOrder.RadioText>{item.label}</SortOrder.RadioText>
          </SortOrder.RadioLabel>
        ))
      }
    </SortOrder.RadioContainer>
  );
};

export default OrderComponent;
