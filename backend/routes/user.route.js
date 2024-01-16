import express from 'express';
import userController from '../controllers/user.controller';

const UserRoutes = express.Router();

UserRoutes.route("/register")
  .post(
    userController.createUser,
  );

UserRoutes.route("/login")
  .post(
    userController.loginUser,
  );

export default UserRoutes;
