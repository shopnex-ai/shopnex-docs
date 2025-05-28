# Use the official Node.js 22.14.0-alpine3.21 image as the base image
FROM node:22.14.0-alpine3.21

# Set working directory in the container
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml (or package-lock.json) to the working directory
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the project files
COPY . .

# Build the Next.js app
RUN pnpm build

# Expose the port that the app will run on
EXPOSE 3000

# Run the Next.js app in production mode
CMD ["pnpm", "start"]
