FROM node:jod-alpine3.21

WORKDIR /usr/scr/app

COPY package*.json ./

RUN npm install

COPY server.js ./
COPY Jenkinsfile ./

EXPOSE 8081

CMD ["node", "server.js"]
