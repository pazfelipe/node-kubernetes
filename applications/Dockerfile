FROM node:16-alpine

RUN apk add 

ARG PORT

WORKDIR /opt/app

COPY ./package.json .

RUN yarn

COPY . .

EXPOSE ${PORT}

CMD ["yarn","start"]