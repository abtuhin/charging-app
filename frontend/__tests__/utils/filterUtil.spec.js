const { default: filterByVehicle } = require("@/utils/filterUtil");

describe('filterByVehicle', () => {
  const mockItems = [
    { id: 1, vehicleId: 'PORSCHE1', name: 'Car 1' },
    { id: 2, vehicleId: 'BMW2', name: 'Car 2' },
    { id: 3, vehicleId: 'PORSCHE1', name: 'Car 3' },
  ];

  it('should return all items', () => {
    const result = filterByVehicle(mockItems, 'all');
    expect(result).toEqual(mockItems);
  });

  it('should filter items by vehicleId', () => {
    const result = filterByVehicle(mockItems, 'PORSCHE1');
    const expectedResults = [
      { id: 1, vehicleId: 'PORSCHE1', name: 'Car 1' },
      { id: 3, vehicleId: 'PORSCHE1', name: 'Car 3' },
    ];
    expect(result).toEqual(expectedResults);
  });
});
