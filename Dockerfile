FROM node:lts AS build
RUN npm i -g pnpm

WORKDIR /app
COPY . .
RUN pnpm i
RUN pnpm run build

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80
