function addSquares(a, b) {			
	function square(x) {				
		return x * x;			
	}				
	return square(a) + square(b);		
}
		
const a = addSquares(2, 3);
		
const b = addSquares(3, 4);
		
const c = addSquares(6, 7);


