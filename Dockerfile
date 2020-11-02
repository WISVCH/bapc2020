FROM node:14-alpine as builder
WORKDIR /src
COPY . .
RUN npm install
RUN npm run build

FROM wisvch/nginx
COPY --from=builder /src/build/ /srv/
