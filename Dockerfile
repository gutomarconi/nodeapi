FROM node:11-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3008
CMD ["npm", "run", "test"]
CMD ["npm", "run", "start"]