import React from 'react';
import { render } from '@testing-library/react';
import { TableHeader, TableItem } from '@/components/TableComponent';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/config/styles';

const sampleRecord = {
  sessionId: '1',
  vehicleId: 'PORSCHE1',
  start: '2024-01-16T19:25:03.000Z',
  end: '2024-01-16T19:30:03.000Z',
  totalCost: 838,
};

test('TableHeader should render with correct column names', () => {
  
  const { getByText } = render(<ThemeProvider theme={theme}>
    <TableHeader />
  </ThemeProvider>);

  expect(getByText('Session ID')).toBeInTheDocument();
  expect(getByText('Vehicle ID')).toBeInTheDocument();
  expect(getByText('Start Time')).toBeInTheDocument();
  expect(getByText('End Time')).toBeInTheDocument();
  expect(getByText('Total Cost')).toBeInTheDocument();
});

test('TableItem should render with correct record data', () => {
  const { getByText } = render(<ThemeProvider theme={theme}>
    <TableItem record={sampleRecord} />
  </ThemeProvider>);

  expect(getByText(sampleRecord.sessionId)).toBeInTheDocument();
  expect(getByText(sampleRecord.vehicleId)).toBeInTheDocument();
  expect(getByText(sampleRecord.start)).toBeInTheDocument();
  expect(getByText(sampleRecord.end)).toBeInTheDocument();
  expect(getByText(sampleRecord.totalCost.toString())).toBeInTheDocument();
});
