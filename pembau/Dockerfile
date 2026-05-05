# --- Build stage ---
FROM node:24-alpine AS builder

WORKDIR /app

# install deps
COPY package*.json ./
RUN npm install

# copy source
COPY . .

# build Vite app
RUN npm run build


# --- Runtime stage ---
FROM nginx:alpine

# replace default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]