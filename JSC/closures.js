const createPet = function(name) {
	let sex;
	const pet = {
		setName(newName) {
			name = newName;
		},

		getName = {
			return name;
		},
		getSex() = {
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
pet.getName();
pet.setName("Nmappy");
pet.setSex("female");
pet.getName();
pet.getSex();

