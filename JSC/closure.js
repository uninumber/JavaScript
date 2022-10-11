const pet = function(name) {
	const getName = function() {
		return name;
	}
	return getName;
}

const myPet = pet("Vivie");
myPet();

