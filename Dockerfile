FROM node:alpine

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# COPY tsconfig.json file
COPY tsconfig.json ./

COPY . .

# Install app dependencies
RUN yarn install --development

EXPOSE 3001

CMD [ "yarn", "dev" ]