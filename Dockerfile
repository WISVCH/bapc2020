FROM node:14-alpine as builder
WORKDIR /src
COPY . .
RUN npm install
RUN npm run build

FROM wisvch/nginx
# Change the config file to serve index for urls
USER root
RUN sed -i -r '/index.htm;/a\        try_files $uri /index.html =404;' /etc/nginx/conf.d/default.conf
USER 100
COPY --from=builder /src/build/ /srv/
