FROM node:22-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM httpd
COPY --from=builder /app/dist /usr/local/apache2/htdocs/