FROM node:18-alpine

WORKDIR /app

COPY . .

COPY package*.json ./

RUN npm install 

RUN npm run build

EXPOSE 3000

CMD ["npm" , "run", "dist/main.js"]