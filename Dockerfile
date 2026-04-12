FROM node:14.21.3-alpine

# Create app directory
RUN mkdir /code
WORKDIR /code

# Install build dependencies before resolving packages.
RUN apk add --no-cache python3 make g++

# Copy dependency manifests first to improve docker layer reuse.
ADD package.json /code/
ADD yarn.lock /code/

# Run Yarn to install all dependencies
RUN yarn install --pure-lockfile

# Copy the rest of the application after dependencies are cached.
ADD . /code/
