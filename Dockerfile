# Base image
FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:alpine AS prod

COPY --from=build /app/dist/sobrecodigo-front /usr/share/nginx/html

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]
