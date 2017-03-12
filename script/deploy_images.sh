#!/bin/sh

rsync -rave "ssh -i ~/Security/aws-keypair-imac.pem" dist/static/*.jpg ubuntu@ec2-13-124-28-33.ap-northeast-2.compute.amazonaws.com:/home/ubuntu/app/images/ --delete