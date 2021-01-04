FROM node:12-alpine AS base

WORKDIR /usr/src/app

COPY ./package* ./

RUN npm set progress=false && npm config set depth 0
RUN npm i

COPY env ./env

COPY apps /usr/apps

FROM node:12-alpine AS color
WORKDIR /usr/src/app
COPY --from=base /usr/src/app/ .
COPY --from=base /usr/color-service/ ./color-service
CMD ["npm", "run", "start:dev", "color"]

FROM node:12-alpine AS certification
WORKDIR /usr/src/app
COPY --from=base /usr/src/app/ .
COPY --from=base /usr/apps/certification ./apps/certification
CMD ["npm","run","start:dev","certification"]

FROM node:12-alpine AS api-gateway
WORKDIR /usr/src/app
COPY --from=base /usr/src/app/ .
COPY --from=base /usr/apps/api-gateway ./apps/api-gateway
CMD ["npm","run","start:dev"]
