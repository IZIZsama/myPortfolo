# Multi-stage build for Vite + React (TypeScript)

# 1) Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Build
COPY . .
RUN npm run build

# 2) Runtime stage (serve static files via nginx)
FROM nginx:alpine AS runner

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

# SPA fallback for client-side routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


