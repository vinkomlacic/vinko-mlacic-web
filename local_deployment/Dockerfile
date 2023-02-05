FROM nginx:alpine

COPY ./local_deployment/default.conf /etc/nginx/conf.d/default.conf

ARG APP_HOME=~/website
WORKDIR ${APP_HOME}

# Clone the repository
COPY ./www /var/www/html
