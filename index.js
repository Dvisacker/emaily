'use strict';
const app = require('./server/app')
const awsServerlessExpress = require('aws-serverless-express')
const server = awsServerlessExpress.createServer(app)

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);