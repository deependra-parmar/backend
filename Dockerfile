FROM node:18

WORKDIR /src/app

COPY package* .

RUN npm install

COPY index.js .

EXPOSE 4000

CMD ["node", "index.js"]