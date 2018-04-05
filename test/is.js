//@ts-check

let { Assert, Invoke } = require('..'),
	{ shouldThrow, noThrow } = require('./_utils');

describe('Assert.is', () => {
	noThrow('# true isTrue', () => Assert(true).isTrue());
	noThrow('# false isFalse', () => Assert(false).isFalse());

	noThrow('# undefined isUndefined (1)', () => Assert(undefined).isUndefined());
	//@ts-ignore
	noThrow('# undefined isUndefined (2)', () => Assert().isUndefined());

	noThrow('# "" isString', () => Assert("").isString());

	noThrow('# 0 isNumber', () => Assert(0).isNumber());
	noThrow('# Infinity isNumber', () => Assert(Infinity).isNumber());

	noThrow('# [] isObject', () => Assert([]).isObject());
	noThrow('# null isObject', () => Assert(null).isObject());


	shouldThrow('# ! null isUndefined', () => Assert(null).isUndefined());
	shouldThrow('# ! "hello" isObject', () => Assert("hello").isObject());
});
