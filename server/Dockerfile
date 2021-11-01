FROM openresty/openresty:alpine-fat

WORKDIR /var/www
COPY ./includes .

WORKDIR /etc/nginx/conf.d

RUN ln -s /usr/local/openresty/luajit/bin/luarocks /usr/bin/luarocks

COPY ./default.conf .