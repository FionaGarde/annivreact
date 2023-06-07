FROM node:latest

WORKDIR /home/node/app

COPY ./app/package*.json ./

RUN npm install

COPY ./app/ .

EXPOSE 3003

CMD ["npm", "start"]