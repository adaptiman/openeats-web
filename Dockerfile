FROM node:14.21.3-alpine

# Create app directory
RUN mkdir /code
WORKDIR /code

# Install app dependencies
ADD . /code/

# Build dependencies are required when native modules do not have a prebuilt binary.
RUN apk add --no-cache python3 make g++

# Run Yarn to install all dependencies
RUN yarn install --pure-lockfile
