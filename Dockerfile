# Stage 1: Build stage
FROM oven/bun:1-alpine AS build

WORKDIR /app

# Copy dependency files
COPY package.json bun.lock ./

# Install dependencies using bun
RUN bun install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the project
# This will generate a dist/ folder containing static files
RUN bun run build

# Stage 2: Production stage
# Use a lightweight Nginx image to serve the static files
FROM nginx:alpine

# Copy the build output from the build stage to Nginx's HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration to handle SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the portfolio
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
