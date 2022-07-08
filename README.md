# serverless & node & aws

Framework Serverless
https://www.serverless.com/

$ sudo npm install -g serverless@latest
$ npm install serverless-offline serverless-offline-ssm --save-dev
$ serverless --version

## configure serverless with aws from local
$ serverless config credentials --provider aws --key

## credentials are saved on .aws/credentials
## create project
$ serverless create --template aws-nodejs --name hello

## url of lambda on AWS, see the region
https://eu-west-3.console.aws.amazon.com/lambda/home?region=eu-west-3#/functions

serverless.yml
--------------------
provider:
  name: aws
  runtime: nodejs12.x
  lambdaHashingVersion: 20201221
  region:eu-west-3

## pass the code to AWS, from local to AWS 
$ severless deploy

## run the function to be executed on aws
$ serverless invoke -f hello -s dev

## run function from local environment
$ serverless invoke local -f hello -s dev

## install a pluggin to run on local - gateway
https://github.com/dherault/serverless-offline

$ npm install serverless-offline --save-dev
$ npm init -y

# run app
$ sls offline

get endpoints from APIGATEWAY
http://localhost:3000/dev/user/javier

## post. install dependencies querystring
$ npm install --save query-string

# from postman, endpoints:
POST http://localhost:3000/dev/createuser
body/x-www-form-urlencoded
KEY     VALUE
user    javier

GET http://localhost:3000/dev/user
GET http://localhost:3000/dev/user/javier

