FROM node:14.15.3

WORKDIR /usr/app

COPY ./package.json ./yarn.lock ./.npmrc ./
COPY ./config ./config

COPY docker-entrypoint.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/docker-entrypoint.sh

RUN wget https://github.com/mikefarah/yq/releases/download/v4.9.1/yq_linux_amd64  -O /usr/bin/yq &&  chmod +x /usr/bin/yq

#RUN yarn install --frozen-lockfile

COPY ./ ./

RUN yarn build

CMD ["yarn", "start:prod:migrate"]
