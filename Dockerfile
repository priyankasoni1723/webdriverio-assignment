# Use the official Node.js image as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of your application code and WebdriverIO configuration files
COPY . .

# Ensure WebdriverIO and other devDependencies are installed
RUN npm install

# Command to run your WebdriverIO tests
CMD ["npx", "wdio", "run", "./wdio.conf.ts"]
