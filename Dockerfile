FROM ubuntu:16.04

LABEL maintainer="Kim, Geunho <geunho.dev@gmail.com>"

# INITIALIZE DIRECTORIES
RUN mkdir -p /wd/app /wd/app/images/original
COPY ./dist /wd/app

# COPY IMAGES
COPY ./src/assets/images/IMG_* /wd/app/images/
COPY ./src/assets/images/original/IMG_* /wd/app/images/original/

# INSTALL NGINX
RUN apt-get update \
    && apt-get install -y nginx \
    && rm /etc/nginx/sites-available/default

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

RUN ln -sf /dev/stdout /var/log/nginx/access.log \
	&& ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80
STOPSIGNAL SIGTERM
CMD ["nginx", "-g", "daemon off;"]
