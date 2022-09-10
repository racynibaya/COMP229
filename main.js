import { halfOf, multiply } from './lib.js';
import doSomething from './doSomething.js';
import { flag, touch } from './validator.js';

console.log(halfOf(84));
console.log(multiply(21, 2));
doSomething();

console.log(flag);
touch();
console.log(flag);

class Vehicle {
  constructor(wheels) {
    this.wheels = wheels;
  }

  toString() {
    return '(' + this.wheels + ')';
  }
}

class Car extends Vehicle {
  constructor(color) {
    super(4);
    this.color = color;
  }

  toString() {
    return super.toString() + 'colored: ' + this.color;
  }
}

let car = new Car('blue');
car.toString();
console.log(car instanceof Car);
console.log(car instanceof Vehicle);

const numbers = [2, 4, 5, 6, 8];
const squares = numbers.map(n => n * n);
console.log(squares);

const evens = [];

numbers.forEach(n => {
  if (n % 2 === 0) {
    evens.push(n);
  }
});

const author = {
  fullName: 'Bob Alice',

  books: [],

  printBooks() {
    this.books.forEach(book => console.log(book + ' by ' + this.fullName));
  },
};

function iterateVar() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }

  console.log(i);
}

function iterateLet() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  // console.log(i); // This is going to be an error because let is block scope
}

iterateLet();

const me = 1;
// me = 12  This is going to be an error because const is immutable with primitive types

function add(x, y = 0) {
  return x + y;
}

add(1);

add(1, 2);

function userFriends(user, ...friends) {
  console.log(user + ' has ' + friends.length + 'friends');
}

userFriends('User', 'Bob', 'Alice');

function userTopFriends(firstFriend, secondFriend, thirdFriends) {
  console.log(firstFriend);

  console.log(secondFriend);

  console.log(thirdFriends);
}

userTopFriends(...['Alice', 'Bob', 'Michelle']);

function parent() {
  const message = 'Hello World';

  function child() {
    alert(message);
  }

  child();
}

parent();
