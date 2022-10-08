function outside(x) {
	function inside(y) {
		return x + y;
	}
	return inside;
}

const fnInside = outside(12);
console.log(fnInside);
const result = fnInside(30);
console.log(result);
const result1 = outside(3)(5);
console.log(result1);
