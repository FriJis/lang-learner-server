FROM node:20.9.0

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn build