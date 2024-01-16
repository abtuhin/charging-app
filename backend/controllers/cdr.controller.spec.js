import CDRController from '../controllers/cdr.controller';
import CDRService from '../services/cdr.service';
import validateCDRRecord from '../utils/validateCDRRecord';

jest.mock('../services/cdr.service', () => {
  return {
    getRecords: jest.fn(),
    getRecord: jest.fn(),
    createRecord: jest.fn(),
    getLatestRecordByVehicle: jest.fn()
  }
});
jest.mock('../utils/validateCDRRecord');

describe('CDR Controller', () => {
  let req, res;

  beforeEach(() => {
    req = { query: {}, params: {}, body: {} };
    res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
  });

  describe('getRecords', () => {
    it('should get records successfully', async () => {
      const mockRecords = [
        {
          id: 1,
          sessionId: "1",
          vehicleId: "BMW32",
          start: "2024-01-13T11:40:00.000Z",
          end: "2024-01-13T11:50:00.000Z",
          totalCost: 2000,
          createdAt: "2024-01-13T19:26:58.000Z",
          updatedAt: "2024-01-13T19:26:58.000Z"
        }
      ];
      CDRService.getRecords.mockResolvedValue(mockRecords);

      await CDRController.getRecords(req, res);

      expect(CDRService.getRecords).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        data: mockRecords,
        message: 'Records fetched successfully.',
        success: true,
      });
    });

    it('should handle error during getRecords', async () => {
      CDRService.getRecords.mockRejectedValue(new Error('Service error.'));

      await CDRController.getRecords(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Service error.',
        success: false,
      });
    });
  });

  describe('getRecord', () => {
    it('should get a record successfully', async () => {
      const mockRecord = {
        id: 1,
        sessionId: "1",
        vehicleId: "BMW32",
        start: "2024-01-13T11:40:00.000Z",
        end: "2024-01-13T11:50:00.000Z",
        totalCost: 2000,
        createdAt: "2024-01-13T19:26:58.000Z",
        updatedAt: "2024-01-13T19:26:58.000Z"
      };
      CDRService.getRecord.mockResolvedValue(mockRecord);

      req.params.id = '1';

      await CDRController.getRecord(req, res);

      expect(CDRService.getRecord).toHaveBeenCalledWith('1');
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        data: mockRecord,
        message: 'Record fetched successfully.',
        success: true,
      });
    });

    it('should throw error during getRecord by id', async () => {
      CDRService.getRecord.mockRejectedValue(new Error('Record not found.'));

      req.params.id = '1';

      await CDRController.getRecord(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Record not found.',
        success: false,
      });
    });
  });

  describe('createRecord', () => {
    it('should create a record', async () => {
      const mockLatestVehicleRecord = { id: 1, end: '2024-01-13T12:30:00' };
      const mockValidRecord = true;
      const mockCreatedRecord = { 
        id: 1,
        sessionId: "1",
        vehicleId: "BMW32",
        start: "2024-01-13T11:40:00.000Z",
        end: "2024-01-13T11:50:00.000Z",
        totalCost: 2000,
        createdAt: "2024-01-13T19:26:58.000Z",
        updatedAt: "2024-01-13T19:26:58.000Z"
      };

      CDRService.getLatestRecordByVehicle.mockResolvedValue(mockLatestVehicleRecord);
      validateCDRRecord.mockReturnValue(mockValidRecord);
      CDRService.createRecord.mockResolvedValue(mockCreatedRecord);

      req.body.vehicleId = "BMW32";

      await CDRController.createRecord(req, res);

      expect(CDRService.getLatestRecordByVehicle).toHaveBeenCalledWith("BMW32");
      expect(validateCDRRecord).toHaveBeenCalledWith(mockLatestVehicleRecord, req.body);
      expect(CDRService.createRecord).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        data: mockCreatedRecord,
        message: 'Record created successfully.',
        success: true,
      });
    });

    it('should throw error in create', async () => {
      CDRService.getLatestRecordByVehicle.mockRejectedValue(new Error('Service error.'));

      req.body.vehicleId = "BMW32";

      await CDRController.createRecord(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Service error.',
        success: false,
      });
    });

    it("should handle validation exception", async () => {
      const mockLatestVehicleRecord = { id: 1, end: '2024-01-13T12:30:00' };
      const mockInvalidRecord = false;

      CDRService.getLatestRecordByVehicle.mockResolvedValue(mockLatestVehicleRecord);
      validateCDRRecord.mockReturnValue(mockInvalidRecord);

      req.body.vehicleId = "BMW32";

      await CDRController.createRecord(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: "Can not create this record.",
        success: false,
      });
    });
  });
});
