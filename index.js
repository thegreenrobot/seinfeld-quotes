'use strict';
var uniqueRandomArray = require('unique-random-array');
var quotes = require('./quotes.json');

module.exports = uniqueRandomArray(quotes);
