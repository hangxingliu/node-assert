//@ts-check

module.exports = {
	shouldThrow,
	noThrow
};

/**
 * @param {string} name
 * @param {Function} fn 
 */
function noThrow(name, fn) { 
	it(name, () => fn());
}

/**
 * @param {string} name
 * @param {Function} fn 
 */
function shouldThrow(name, fn) { 
	it(name, () => {
		try {
			fn();
		} catch (exception) { 
			return;
		}
		throw new Error(`expect a exception be thrown, but actual not`);
	});
}