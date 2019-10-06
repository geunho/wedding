#!/bin/sh

rm -rf ./dist
npm run build

docker build --tag geunho/wd-web --no-cache .
rm -rf ./dist