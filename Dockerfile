  
FROM node:12

WORKDIR /app/node-jwt

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD [ "npm", "start" ]