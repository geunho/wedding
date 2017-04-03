#!/bin/sh

rsync -rave "ssh -i ~/Security/aws-keypair-imac.pem" src/assets/images/IMG_* ubuntu@ec2-13-124-28-33.ap-northeast-2.compute.amazonaws.com:/home/ubuntu/app/images/ --delete
rsync -rave "ssh -i ~/Security/aws-keypair-imac.pem" src/assets/images/original/IMG_* ubuntu@ec2-13-124-28-33.ap-northeast-2.compute.amazonaws.com:/home/ubuntu/app/images/original/ --delete