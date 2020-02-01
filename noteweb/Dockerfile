FROM node:8 as react-build
WORKDIR /app
COPY . /app/
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
ENV PATH /app/node_modules/.bin:$PATH
RUN yarn
CMD ["yarn", "start"]
