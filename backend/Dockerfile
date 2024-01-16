FROM node:16

WORKDIR /api
COPY . /api
RUN npm i
EXPOSE 8080
RUN chmod +x startup.sh
RUN npm i -g sequelize-cli nodemon

ENTRYPOINT [ "./startup.sh" ]
