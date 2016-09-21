FROM node:4

COPY . /opt/lab

WORKDIR /opt/lab

RUN npm install
RUN npm install --save geoip