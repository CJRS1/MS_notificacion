FROM node:14

RUN mkdir -p usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3007

CMD [ "npm", "run", "start" ]