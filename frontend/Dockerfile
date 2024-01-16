FROM node:20
WORKDIR /app
COPY . /app

RUN npm i

EXPOSE 4000

RUN npm run build

CMD ["npm", "start"]

