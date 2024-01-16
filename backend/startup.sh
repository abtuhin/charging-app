#!/bin/bash

npm run migrate-db
npm run start &
sleep 10
npm run test