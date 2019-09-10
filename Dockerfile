FROM node:12.10.0-alpine as build-step

WORKDIR  /app
COPY package.json ./

RUN npm install

COPY . .

RUN npm build

FROM nginx:1.17.3-alpine as prod-stage
COPY --from=build-step /app/dist/pet-frontend /usr/share/nginx/html
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]