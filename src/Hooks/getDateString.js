function getStingDate(date) {
	const d = new Date(date);

	const year = d.getFullYear();
	let month = (d.getMonth() + 1)
	let day = d.getDate();

	month < 10 ? month = `0${month}` : month = `${month}`
	day < 10 ? day = `0${day}` : day = `${day}`;
  
  return `${year}-${month}-${day}`;
}

function test() {
	const x = 5;
	const y = 6;
	if (x !== y) {
		return x;
	}
	return y
}

module.exports = {
	getStingDate: getStingDate 
};