function addSquares(a, b, c) {
	function cube(x) {
		return x*x*x;
	}
	return cube(a) + cube(b) + cube(c);
}

const a = addSquares(2, 3, 4);
console.log(a);
const b = addSquares(5, 6, 7);
console.log(b);
const c = addSquares(5, 2, 8);
console.log(c);
