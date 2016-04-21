#!/usr/bin/env node
var Bot = require('./bot');
var settings = {
  token: process.env.YESNO_SLACKBOT_TOKEN,
  name: 'yesno'
};
new Bot(settings).run();

