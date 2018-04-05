//@ts-check

let { Invoke } = require('..'),
	{ shouldThrow, noThrow } = require('./_utils');

//@ts-ignore
//eslint-disable-next-line
let errorFn1 = () => a.b.c = 1;
let okFn1 = () => 42;

describe('Invoke', () => {

	noThrow('# should throw', () => Invoke(errorFn1).hasException());
	noThrow('# should throw with keyword', () => Invoke(errorFn1).hasException('is not defined'));

	noThrow('# no throw', () => Invoke(okFn1).isNumber().equals(42));

	shouldThrow('# ! should throw', () => Invoke(okFn1).hasException());
	shouldThrow('# ! should throw with keyword', () => Invoke(errorFn1).hasException('is defined'));
});
