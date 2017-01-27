#!/usr/bin/env node
'use strict';
var meow = require('meow');
var quotes = require('./');

var cli = meow([
	'Examples',
	'  $ quotes',
	'  "How I wish you could make a living parallel parking. (George - The Parking Spot)"',
	''
]);

console.log(cli.flags.all ? quotes : quotes());
