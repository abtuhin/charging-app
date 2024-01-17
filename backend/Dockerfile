FROM node:16

WORKDIR /api
COPY . /api
RUN npm i
EXPOSE 8080

RUN apt-get update && apt-get install -y dos2unix
RUN dos2unix startup.sh
RUN chmod +x startup.sh

RUN npm i -g sequelize-cli nodemon

ENTRYPOINT [ "./startup.sh" ]
