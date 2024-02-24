FROM node:20.4.0-alpine as build

WORKDIR /app

COPY . .

RUN npm i
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /var/www/html

COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf

RUN chown nginx:nginx /var/www/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
