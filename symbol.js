var s = Symbol("something");
var s = Symbol("something");
var s = Symbol();

console.log(Symbol("something") === Symbol("something"));

//as i understood every symbol has it's own identifier and by default = 0;
//If you want to assign Object to symbol do the next:

var s = Symbol("something");
var b = Object(s);
console.log(typeof b);
