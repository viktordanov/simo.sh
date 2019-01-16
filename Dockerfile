FROM node
COPY . /usr/app
WORKDIR /usr/app
RUN npm install
RUN ls
CMD npm run build
