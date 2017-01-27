import test from 'ava';
import getQuote from './';

const quotes = require('./quotes.json');

test('quote is not empty', t => {
	t.true(getQuote().length > 0);
});

test('quote is a quote', t => {
	t.true(isValidQuote(getQuote()));
});

function isValidQuote(quote) {
	return quotes.some(n => quote === n);
}
