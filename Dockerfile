FROM node:14
COPY . .
COPY .env .env
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]