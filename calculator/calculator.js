module.exports = {
	add
};

function add(...numbers) {
	const numbers = Arry.isArray(args) ? args : [ ...arguments ];
	// acc = accumulator e = event
	return numbers.reduce((accumulator, event) => {
		return accumulator + event;
	}, 0);
}
