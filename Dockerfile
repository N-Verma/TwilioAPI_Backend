FROM node:15-alpine as build-step
WORKDIR /app
COPY package.json /app

RUN npm install
COPY . /app
CMD [ "node", "index.js" ]