FROM nginx:1.11.10
COPY . /usr/share/nginx/html

EXPOSE 80

ENV VIRTUAL_HOST="parjoehlerhof.simonmulser.com"
ENV LETSENCRYPT_HOST="parjoehlerhof.simonmulser.com"
ENV LETSENCRYPT_EMAIL="simonmulser@gmail.com"
