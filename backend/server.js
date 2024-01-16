'use strict'

require("dotenv").config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import "./connection"; // this should be always before accessing models
import UserRoutes from './routes/user.route';
import CDRRoutes from './routes/cdr.route';

const app = express();
const PORT = process.env.HOST_PORT;

const corsOptions = { origin: `http://${process.env.CLIENT_HOST}:${process.env.APP_PORT}`};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.use('/users', UserRoutes);
app.use('/records', CDRRoutes);

app.listen(PORT, () => console.log("server is running on port " + PORT));