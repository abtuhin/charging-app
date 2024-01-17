import sortOrdering from "@/utils/sortUtil";

describe('sortOrdering', () => {
  const data = [
    {
      sessionId: '1',
      vehicleId: 'PORSCHE1',
      start: '2024-01-16T19:25:03.000Z',
      end: '2024-01-16T19:30:03.000Z',
      totalCost: 838,
    },
    {
      sessionId: '2',
      vehicleId: 'BMW2',
      start: '2024-01-16T19:15:03.000Z',
      end: '2024-01-16T19:20:03.000Z',
      totalCost: 720,
    },
    {
      sessionId: '3',
      vehicleId: 'AUDI3',
      start: '2024-01-16T19:35:03.000Z',
      end: '2024-01-16T19:40:03.000Z',
      totalCost: 950,
    },
  ];

  it('should sort objects by start time in ascending order', () => {
    const sortedData = data.slice().sort(sortOrdering('start', 'asc'));
    expect(sortedData).toEqual([
      {
        sessionId: '2',
        vehicleId: 'BMW2',
        start: '2024-01-16T19:15:03.000Z',
        end: '2024-01-16T19:20:03.000Z',
        totalCost: 720,
      },
      {
        sessionId: '1',
        vehicleId: 'PORSCHE1',
        start: '2024-01-16T19:25:03.000Z',
        end: '2024-01-16T19:30:03.000Z',
        totalCost: 838,
      },
      {
        sessionId: '3',
        vehicleId: 'AUDI3',
        start: '2024-01-16T19:35:03.000Z',
        end: '2024-01-16T19:40:03.000Z',
        totalCost: 950,
      },
    ]);
  });

  it('should sort objects by total cost in descending order', () => {
    const sortedData = data.slice().sort(sortOrdering('totalCost', 'desc'));
    expect(sortedData).toEqual([
      {
        sessionId: '3',
        vehicleId: 'AUDI3',
        start: '2024-01-16T19:35:03.000Z',
        end: '2024-01-16T19:40:03.000Z',
        totalCost: 950,
      },
      {
        sessionId: '1',
        vehicleId: 'PORSCHE1',
        start: '2024-01-16T19:25:03.000Z',
        end: '2024-01-16T19:30:03.000Z',
        totalCost: 838,
      },
      {
        sessionId: '2',
        vehicleId: 'BMW2',
        start: '2024-01-16T19:15:03.000Z',
        end: '2024-01-16T19:20:03.000Z',
        totalCost: 720,
      },
    ]);
  });

  it('should return same list without ordering', () => {
    const sortedData = data.slice().sort(sortOrdering('totalCost', 'noMatch'));
    expect(sortedData).toEqual(data);
  });


});
