FROM node:lts

WORKDIR /usr/src/app

COPY package*.json ./
COPY dist/* ./

RUN npm ci --only=production

EXPOSE 9001

ENTRYPOINT ["node", "index.js"]
