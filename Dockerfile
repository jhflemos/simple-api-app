# Use Node.js LTS image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy files
COPY package*.json ./
COPY server.js ./

# Install dependencies
RUN npm install --production

# Expose the app port
EXPOSE 8080

# Run the app
CMD ["node", "server.js"]
