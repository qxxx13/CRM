#React app image
FROM node:lts-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#Nginx config
FROM nginx:stable-alpine
COPY --from=builder /dist /usr/share/nginx/html
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
