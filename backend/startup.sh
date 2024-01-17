#!/bin/bash

npm run migrate-db
npm run test &
sleep 5
npm run start