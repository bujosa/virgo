FROM node:12-alpine AS base

WORKDIR /usr/src/app

COPY ./package* ./

RUN npm set progress=false && npm config set depth 0
RUN npm i

COPY nest-cli.json ./
COPY tsconfig* ./
COPY env ./env
COPY .eslintrc.js ./.eslintrc.js
COPY libs ./libs

COPY apps /usr/apps

FROM node:12-alpine AS house-service
WORKDIR /usr/src/app
COPY --from=base /usr/src/app/ .
COPY --from=base /usr/apps/house-service ./apps/house-service
CMD ["npm", "run", "start:dev", "house-service"]

FROM node:12-alpine AS color-service
WORKDIR /usr/src/app
COPY --from=base /usr/src/app/ .
COPY --from=base /usr/apps/color-service ./apps/color-service
CMD ["npm","run","start:dev","color-service"]

FROM node:12-alpine AS api-gateway
WORKDIR /usr/src/app
COPY --from=base /usr/src/app/ .
COPY --from=base /usr/apps/api-gateway ./apps/api-gateway
CMD ["npm","run","start:dev"]
