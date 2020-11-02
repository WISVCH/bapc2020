FROM node as builder
WORKDIR /src
COPY . .
RUN npm install -g npm@7.0.7
RUN npm run build

FROM wisvch/nginx
COPY --from=builder /src/build/ /srv/
