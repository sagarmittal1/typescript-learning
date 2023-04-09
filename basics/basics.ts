// primitives: number, string, boolean
// more complex: arrays, objects
// function types, parameters

// primitives

let age: number;
age = 12.5;

let username: string;
username = 'Sagar';

let isSingle: boolean;
isSingle = true;

// more complex types

let hobbies: string[];
hobbies = ['chess', 'typing', 'chilling'];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Sagar',
  age: 21,
};

let people: Person[];

// type inference & union types

// if we don't define any type then it will be 'any' which kills the purpose of using TS
let course: string | number = 'How to data girls';
course = 12121;

// function and types

function add(a: number, b: number): number {
  return a + b;
}

function print(value: any): void {
  console.log(value);
}

// Generics
// this can be tricky to understand. Give some thought on this

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['-1', '2'], '2');
