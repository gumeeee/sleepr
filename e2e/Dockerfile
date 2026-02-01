FROM node:alpine

WORKDIR /usr/src/app

ENV CI=true

COPY package.json pnpm-lock.yaml* ./

RUN npm install -g pnpm

RUN pnpm install --frozen-lockfile --ignore-scripts

COPY . .

CMD [ "pnpm", "test" ]