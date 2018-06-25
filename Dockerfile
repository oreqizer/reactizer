FROM node:9-alpine

WORKDIR /tmp/app
COPY package.json yarn.lock ./
RUN yarn --prod

COPY data data/
COPY dist dist/

EXPOSE 3000
CMD yarn run run
