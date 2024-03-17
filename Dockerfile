FROM node:alpine
WORKDIR /app
COPY ./package.json /app/package.json

RUN npm install --prefix /app/
COPY . /app/

CMD [ "cd","/app/","&&","npm","start" ]