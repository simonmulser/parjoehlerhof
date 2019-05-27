## How to deploy the website

1) Run `gulp`
2) Run `rsync --delete -r --verbose -e='docker-machine ssh dockerdo' dist/ :www/parjoehlerhof`. Run it from Windows Subsystem from Linux.

## How to set docker host

Run `eval $(docker-machine env dockerdo)`

## How to deploy a new docker image

1) Run `docker build -t parjoehlerhof docker/.`
2) Run: `docker run -d -v /root/www/parjoehlerhof:/usr/share/nginx/html --network=webproxy --name parjoehlerhof parjoehlerhof`. Run this directly on the DO server.

## How to add docker host

Run:
`docker-machine create --driver=generic --generic-ip-address=IP_ADDRESS --generic-ssh-user=USERNAME --generic-ssh-key=PATH_TO_SSH_KEY --generic-ssh-port=PORT MACHINE_NAME`

## How to create nginx proxy with letsencrypt

1) Consider to start the docker containers directly on DO server.
2) See https://github.com/evertramos/docker-compose-letsencrypt-nginx-proxy-companion.

## Troubleshooting

- If `nginx-gen` is not starting, run `docker-compose up -d`.
