//@ts-check

let { Assert } = require('..'),
	{ shouldThrow, noThrow } = require('./_utils');

describe('Assert.isEmpty', () => {
	noThrow('# 0 isEmpty', () => Assert(0).isEmpty());
	noThrow('# [] isEmpty', () => Assert([]).isEmpty());
	noThrow('# "" isEmpty', () => Assert("").isEmpty());
	noThrow('# null isEmpty', () => Assert(null).isEmpty());
	noThrow('# undefined isEmpty', () => Assert(undefined).isEmpty());


	shouldThrow('# ! {} isEmpty', () => Assert({}).isEmpty());
	shouldThrow('# ! [0] isEmpty', () => Assert([0]).isEmpty());
	shouldThrow('# ! " " isEmpty', () => Assert(" ").isEmpty());
	shouldThrow('# ! String isEmpty', () => Assert(String).isEmpty());
	shouldThrow('# ! Function isEmpty', () => Assert(Function).isEmpty());
	shouldThrow('# ! function isEmpty', () => Assert(() => void 0).isEmpty());
});
