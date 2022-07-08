'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hi serverless',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.hellouser = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hi user',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.hellouserparam = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hi ${event.pathParameters.name}`,
        input: event,
      },
      null,
      2
    ),
  };
};

const querystring = require("query-string");
module.exports.createuser = async (event) => {
  const body = querystring.parse(event["body"])
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'create an user',
        input: `Hi ${body.user}`,
      },
      null,
      2
    ),
  };
};
