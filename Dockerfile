# ==== CONFIGURE =====
# Use a Node 18 base image
FROM node:18-alpine AS builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy package files
COPY package.json package.json
COPY package-lock.json package-lock.json
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 
# Copy app files
COPY . .

# ==== BUILD =====
# Build the app
RUN npm run build

# ====== BUILD NGINX and RUN =====
# Choose NGINX as our base Docker image
FROM nginx:1.22-alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf *
# Copy static assets from builder stage
COPY --from=builder /app/build .
# Entry point when Docker container has started
ENTRYPOINT ["nginx", "-g", "daemon off;"]