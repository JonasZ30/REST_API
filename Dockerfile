FROM node:14

WORKDIR /index

COPY package.json package.json
RUN npm install

COPY . .

CMD ["node", "index.js"]
