FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

RUN npm i --save-dev @types/react-router-dom

EXPOSE 3000
