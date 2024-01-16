import CDRService from './cdr.service';
import CDR from '../models/CDR';

jest.mock('../models/CDR', () => {
  return {
    create: jest.fn(),
    findOne: jest.fn(),
    findAll: jest.fn()
  };
});

const mockRecords = [
  {
    id: 1,
    sessionId: "13212",
    vehicleId: "BMW32",
    start: "2024-01-13T12:30:00",
    end: "2024-01-13T12:35:00",
    totalCost: 204.10
  },
  {
    id: 2,
    sessionId: "13214",
    vehicleId: "AUDI32",
    start: "2023-01-13T12:30:00",
    end: "2023-01-13T12:45:00",
    totalCost: 100.10
  }
];

describe('UserService', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should get all records', async () => {
    CDR.findAll.mockResolvedValueOnce(mockRecords);
    const result = await CDRService.getRecords();

    expect(CDR.findAll).toHaveBeenCalled();
    expect(result).toEqual(mockRecords);
  });

  it('should throw error while getting records', async () => {
    CDR.findAll.mockRejectedValueOnce(new Error('Random error from database.'));
    await expect(CDRService.getRecords()).rejects.toThrow('Random error from database.');
  })

  it('should get a record by ID', async () => {
    CDR.findOne.mockResolvedValueOnce(mockRecords[0]);
    const result = await CDRService.getRecord(1);
    
    expect(CDR.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    expect(result).toEqual(mockRecords[0]);
  });

  it('should throw an error while getting a record by id', async () => {
    CDR.findOne.mockRejectedValueOnce(new Error('Random error from database.'));
    const mockId = 1;
    await expect(CDRService.getRecord(mockId)).rejects.toThrow('Random error from database.');
  });

  it('should handle getting a non-existent record by ID', async () => {
    CDR.findOne.mockResolvedValueOnce(null);
    const result = await CDRService.getRecord(1);

    expect(CDR.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    expect(result).toBeNull();
  });

  it('should create a new record', async () => {
    const mockPayload = {
      sessionId: "13214",
      vehicleId: "AUDI32",
      start: "2023-01-13T12:30:00",
      end: "2023-01-13T12:45:00",
      totalCost: 100.10
    };

    const mockCreatedRecord = { id: 1, ...mockPayload };
    CDR.create.mockResolvedValueOnce(mockCreatedRecord);
    const result = await CDRService.createRecord(mockPayload);

    expect(CDR.create).toHaveBeenCalledWith(mockPayload);
    expect(result).toEqual(mockCreatedRecord);
  });

  it('should throw error when create', async () => {
    CDR.create.mockRejectedValueOnce(new Error('Random error from database.'));
    
    const mockPayload = {
      sessionId: "13214",
      vehicleId: "AUDI32",
      start: "2023-01-13T12:30:00",
      end: "2023-01-13T12:45:00",
      totalCost: 100.10
    };

    await expect(CDRService.createRecord(mockPayload)).rejects.toThrow('Random error from database.');
  });

  it('should return the latest record for a valid vehicle ID', async () => {
    const vehicleId = mockRecords[0].id;
    const mockLatestRecord = mockRecords[0];

    CDR.findOne.mockResolvedValueOnce({
      get: jest.fn().mockReturnValue(mockLatestRecord),
    });

    const result = await CDRService.getLatestRecordByVehicle(vehicleId);

    expect(CDR.findOne).toHaveBeenCalledWith({
      where: { vehicleId },
      order: [['end', 'DESC']],
    });
    expect(result).toEqual(mockLatestRecord);
  });

  it('should return null for a non-existent vehicle ID', async () => {
    CDR.findOne.mockResolvedValue(null);

    const result = await CDRService.getLatestRecordByVehicle(456);

    expect(CDR.findOne).toHaveBeenCalledWith({
      where: { vehicleId: 456 },
      order: [['end', 'DESC']],
    });

    expect(result).toEqual({ error: 'No record found.' });
  });

  it('should handle errors and return Mock error', async () => {
    const mockId = "vehicleId";
    CDR.findOne.mockRejectedValueOnce(new Error('Random error from database.'));
    await expect(CDRService.getLatestRecordByVehicle(mockId)).rejects.toThrow('Random error from database.');
  });

});
