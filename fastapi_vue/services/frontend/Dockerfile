FROM node:lts-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install @vue/cli@5.0.6 --location=global

COPY package.json .
COPY package-lock.json .
RUN npm install
RUN chown -R node /app/node_modules
USER node

CMD ["npm", "run", "serve"]