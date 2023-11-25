# Build
FROM node:lts-alpine AS build-stage

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# Production
FROM node:lts-alpine AS production-stage

WORKDIR /app

COPY --from=build-stage /app/.output ./.output

RUN yarn install --frozen-lockfile --production

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
