import validateCDRRecord from './validateCDRRecord';

describe('validateCDRRecord', () => {
  it('should return false if end is not greater than start', () => {
    const latestVehicleRecord = null; 
    const payload = {
      start: '2024-01-13T12:30:00',
      end: '2024-01-13T12:00:00',
      totalCost: 100,
    };

    const result = validateCDRRecord(latestVehicleRecord, payload);

    expect(result).toBe(false);
  });

  it('should return false if total cost is not greater than 0', () => {
    const latestVehicleRecord = null;
    const payload = {
      start: '2024-01-13T12:00:00',
      end: '2024-01-13T13:00:00',
      totalCost: 0,
    };
    const result = validateCDRRecord(latestVehicleRecord, payload);
    expect(result).toBe(false);
  });

  it('should return false if latest record and end is not greater than or equal to current payload start', () => {
    const latestVehicleRecord = {
      end: '2024-01-13T13:00:00',
    };

    const payload = {
      start: '2024-01-13T12:00:00',
      end: '2024-01-13T12:30:00',
      totalCost: 100,
    };

    const result = validateCDRRecord(latestVehicleRecord, payload);

    expect(result).toBe(false);
  });

  it('should return true for a valid payload', () => {
    const latestVehicleRecord = null;
    const payload = {
      start: '2024-01-13T12:00:00',
      end: '2024-01-13T13:00:00',
      totalCost: 100,
    };

    const result = validateCDRRecord(latestVehicleRecord, payload);

    expect(result).toBe(true);
  });
});
