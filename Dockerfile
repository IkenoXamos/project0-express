FROM node:lts

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 9001

ENTRYPOINT ["node", "src/index.ts"]
