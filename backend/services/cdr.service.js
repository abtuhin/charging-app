
import CDR from "../models/CDR";

export default {
  getRecords: async () => {
    try {
      return await CDR.findAll();
    } catch (error) {
      throw new Error(error);
    }
  },
  getRecord: async (id) => {
    try {
      return await CDR.findOne({ where : { id }});
    } catch (error) {
      throw new Error(error);
    }
  },
  createRecord: async (payload) => {
    try {
      const record =  await CDR.create(payload);
      return record;
    } catch (error) {
      throw new Error(error);
    }
  },
  getLatestRecordByVehicle: async (vehicleId) => {
    try {
      const latestRecord = await CDR.findOne({
        where: { vehicleId },
        order: [['end', 'DESC']],
      });
      
      if(!latestRecord) return {error: "No record found."};

      return latestRecord.get();
    } catch (error) {
      throw new Error(error);
    }
  }
}