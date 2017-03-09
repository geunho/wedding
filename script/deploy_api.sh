#!/bin/sh

SERVER=ubuntu@ec2-13-124-28-33.ap-northeast-2.compute.amazonaws.com:/home/ubuntu/api
scp -i ~/Security/aws-keypair-imac.pem ./api.js $SERVER/
rsync -rave "ssh -i ~/Security/aws-keypair-imac.pem" ./lib/* $SERVER/lib/ --delete