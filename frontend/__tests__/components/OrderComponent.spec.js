import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import OrderComponent from '@/components/OrderComponent';

const options = [
  { label: 'Asc', value: 'asc' },
  { label: 'Desc', value: 'desc' },
];

test('OrderComponent should render with options and handle change event', () => {
  const onOrderChangeMock = jest.fn();

  const { getByLabelText } = render(
    <OrderComponent options={options} sortOrder="asc" onOrderChange={onOrderChangeMock} />
  );

  const ascRadio = getByLabelText('Asc');
  const descRadio = getByLabelText('Desc');

  expect(ascRadio).toBeChecked();
  expect(descRadio).not.toBeChecked();

  fireEvent.click(descRadio);

  expect(onOrderChangeMock.mock.calls[0][0].target.value).toBe('desc');
});
