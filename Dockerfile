FROM node:16.20.2-alpine

# Create app directory
RUN mkdir /code
WORKDIR /code

# Copy dependency manifests first to improve docker layer reuse.
ADD package.json /code/
ADD yarn.lock /code/

# Run Yarn to install all dependencies
RUN yarn install --pure-lockfile

# Copy the rest of the application after dependencies are cached.
ADD . /code/
