const createPet = function(name) {
	let sex;
	const pet = {
		setName(newName) {
			name = newName;
		},

		getName() { 
			return name;
		},
		getSex() {
			return sex;
		},

		setSex(newSex) {
			if (typeof newSex === 'string' && 
				(newSex.toLowerCase() === 'male' || newSex.toLowerCase() === 'female')){
				sex = newSex;
			}
		}
	};

	return pet;
}

const pet = createPet('Mimikatzy');
pet.setName("Nmappy");
pet.getName();
pet.setSex("female");
pet.getSex();
