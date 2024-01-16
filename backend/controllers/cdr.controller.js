import CDRService from '../services/cdr.service';
import validateCDRRecord from '../utils/validateCDRRecord';

export default {
  getRecords: async (req, res) => {
    try {
      const records = await CDRService.getRecords(req.query.status);
      res.status(200).json({
        data: records,
        message: 'Records fetched successfully.',
        success: true,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message, success: false });
    }
  },
  getRecord: async (req, res) => {
    try {
      const record = await CDRService.getRecord(req.params.id);
      res.status(200).json({
        data: record,
        message: 'Record fetched successfully.',
        success: true,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message, success: false });
    }
  },
  createRecord: async (req, res) => {
    try {
      const latestVehicleRecord = await CDRService.getLatestRecordByVehicle(req.body.vehicleId);
      if(!validateCDRRecord(latestVehicleRecord, req.body)) {
        throw new Error("Can not create this record.")
      }
      const record = await CDRService.createRecord(req.body);
      res.status(201).json({
        data: record,
        message: 'Record created successfully.',
        success: true,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message, success: false });
    }
  }
}
