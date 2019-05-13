const { add } = require('./calculator.js');

// test away!

// test case
it('run the test', () => {
	// arrange - setup
	const expected = true;
	//act - run the system under the test
	const actual = true;
	// assert - verify that it works
	expect(actual).toBe(expected);
});
