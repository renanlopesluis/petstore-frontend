FROM node:12.9.1

RUN mkdir git
WORKDIR  /usr/src/app

RUN npm install -g @angular/cli@8.3.1

COPY . /usr/src/app

CMD ng-serve --host 0.0.0.0 --port 4200