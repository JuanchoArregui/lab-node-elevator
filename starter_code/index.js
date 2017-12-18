const Elevator = require('./elevator.js');
const Person = require('./person.js');


let elevator = new Elevator();

// test
elevator.move(15);
elevator.move(-5);

// persons
let person1 = new Person("paco", 2, 8);
let person2 = new Person("luis", 2, 0);
let person3 = new Person("manolo", 5, 10);