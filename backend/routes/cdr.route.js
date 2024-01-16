import express from 'express';
import CDRController from '../controllers/cdr.controller';

const CDRRoutes = express.Router();

CDRRoutes.route("/")
  .get(
    CDRController.getRecords,
  );

CDRRoutes.route("/create")
  .post(
    CDRController.createRecord,
  );

CDRRoutes.route("/:id")
  .get(
    CDRController.getRecord,
  );

export default CDRRoutes;
