#Docker file for Node.js
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

# COPY the current code presnt int he project dir to the working dir (controllers,routes etc)
COPY . .

CMD [ "node", "server.js" ]

EXPOSE 3000
