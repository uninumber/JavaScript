let person = {
	first_name: "Denny",
	last_name: "Fenz"
};

let fruit = {
	form: "round",
	size: "big"
}

let job = {
	"salary": 120000,
	team: "fantastic",
	language: "JavaScript"
}

console.log(job['salary'], job.team);
console.log(fruit.form, 'size' in fruit);
console.log(person.last_name);
