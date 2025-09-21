FROM node:alpine

WORKDIR /app

COPY package.json .

COPY index.js .

RUN npm install

EXPOSE 3300

CMD [ "node", "index.js" ]