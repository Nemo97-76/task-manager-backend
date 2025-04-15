# Use official Node.js image
FROM node:20-alpine3

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy all files
COPY . .

# Expose port (Back4app assigns dynamically)
EXPOSE 5000

# Start the app
CMD ["node", "server.js"] # Replace with your entry file (e.g., app.js)
