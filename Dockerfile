FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install

RUN rm -f .npmrc

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]