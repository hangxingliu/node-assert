//@ts-check

let { Assert } = require('..'),
	{ shouldThrow, noThrow } = require('./_utils');

describe('Assert String methods', () => {
	noThrow('# trim (1)', () => Assert(" HelloWorld ").trim().equals("HelloWorld"));
	noThrow("# trim (2)", () => Assert("").trim().equals(""));

	shouldThrow("# ! trim", () => Assert("0").trim().equals(""));

	it.skip('# TODO ...', () => { });
});
