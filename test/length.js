//@ts-check

let { Assert } = require('..'),
	{ shouldThrow, noThrow } = require('./_utils');

describe('Assert.length', () => {
	noThrow('# [] length is 0', () => Assert([]).length(0));
	noThrow('# "" length is 0', () => Assert("").length(0));
	noThrow('# {length: 0} length is 0', () => Assert({ length: 0 }).length(0));

	noThrow('# [1,2] length is 2', () => Assert([1, 2]).length(2));
	noThrow('# "Hi" length is 2', () => Assert("Hi").length(2));
	noThrow('# {length: 2} length is 2', () => Assert({ length: 2 }).length(2));

	noThrow('# {i: 1, get length() { return this.i++;} } length is 1', () =>
		Assert({ i: 1, get length() { return this.i++; } }).length(1));

	shouldThrow('# ! 0 length is 0', () => Assert(0).length(0));
	shouldThrow('# ! {} length is 0', () => Assert({}).length(0));

	shouldThrow('# ! "" length is 2', () => Assert("").length(2));
});

describe('Assert.lengthIn', () => {
	noThrow('# [] lengthIn [0, Infinity)', () => Assert([]).lengthIn(0));
	noThrow('# [] lengthIn [0, Infinity)', () => Assert([]).lengthIn(0, Infinity));
	noThrow('# [] lengthIn [0, 10)', () => Assert([]).lengthIn(0, 10));

	noThrow('# "Hello" lengthIn [0, 6)', () => Assert([]).lengthIn(0, 6));


	shouldThrow('# ! [] lengthIn [0, 0)', () => Assert([]).lengthIn(0, 0));
	shouldThrow('# ! [1] lengthIn [0, 0)', () => Assert([1]).lengthIn(0, 1));
	shouldThrow('# ! [1,2] lengthIn [0, 0)', () => Assert([1, 2]).lengthIn(1, 2));
});

