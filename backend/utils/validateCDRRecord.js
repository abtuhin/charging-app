export default function (latestVehicleRecord, payload) {
  if(new Date(payload.end) <= new Date(payload.start))
    return false;
  if(payload.totalCost <= 0)
    return false;
  if(latestVehicleRecord && new Date(latestVehicleRecord.end) >= new Date(payload.start) )
      return false;
  return true;
}