FROM node:latest

WORKDIR /home/node/app

COPY ./app/package*.json ./

RUN npm install

RUN npm install -g nodemon 

COPY ./app/ .

EXPOSE 3003

CMD ["npm", "start"]