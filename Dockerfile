FROM node:alpine3.13
WORKDIR /usr/src/app
COPY . /usr/src/app
EXPOSE 3000
CMD [ "npm", "start"]

