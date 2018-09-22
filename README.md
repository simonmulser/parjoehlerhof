## How to deploy the website

1) Run `gulp`
2) Run `rsync --delete -r --verbose -e='docker-machine ssh dockerdo' dist/ :www/parjoehlerhof`

## How to deploy a new docker image

1) Run `docker build -t parjoehlerhof docker/.`
2) Run: 
```
docker run -d -v /root/www/parjoehlerhof:/usr/share/nginx/html \
               --network=webproxy \
               --name parjoehlerhof \
               parjoehlerhof
```
