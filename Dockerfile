FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install && ng build --configuration=production

FROM nginx:latest
COPY --from=build /app/dist/youtube-app-frontend /usr/share/nginx/html
EXPOSE 80
