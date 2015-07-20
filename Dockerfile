FROM ubuntu:trusty

# Install Dependencies
RUN apt-get -y update
RUN apt-get -y install curl build-essential
RUN curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
RUN apt-get install -y nodejs

# Set up app
RUN mkdir -p /var/www/webapp
COPY . /var/www/webapp
WORKDIR /var/www/webapp
RUN npm install
EXPOSE 3000
CMD ["node", "/var/www/webapp/app.js"]
