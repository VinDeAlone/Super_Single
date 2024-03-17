FROM node:alpine
WORKDIR /app
COPY ./package.json /app/package.json

RUN npm install --prefix /app/
COPY . /app/

ENTRYPOINT [ "npm", "start", "--prefix", "/app/" ]