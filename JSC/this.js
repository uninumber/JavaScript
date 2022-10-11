//There are exist 4 types of this: Default, Implicit, Explicit, Contruct



//Default


function alert() {
	console.log(this.name + " is calling.");
}

const name = "Felix";


//Implicit


function alert() {
	console.log(this.age + " years old.");
}

const myObj = {
	age: 22, 
	alert:alert
}

myObj.alert()

//Or with nested:


function alert() {
	console.log(this.age + " years old.");
}

const myObject = {
	age:25, 
	alert:alert,
	nestObject: {
		age:34,
		alert:alert
	}
}

myObject.nestObject.alert();

//Explicit by using call(); apply();


function alert() {
	console.log(this.age + " years old.");
}
const myOb = {
	age:24
}
alert.call(myObj);

//Constructor


function giveAge(age) {
	this.age = age;
}
const bar = new giveAge(22);
console.log(bar.age);

