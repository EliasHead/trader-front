FROM node:alpine

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# COPY tsconfig.json file
COPY tsconfig.json ./

# Install the dependencies (but don't rebuild everything if only package.json changed)
RUN yarn install

# Copy the rest of the project files to the container
COPY . .

EXPOSE 3001

CMD [ "yarn", "dev" ]