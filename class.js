class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.interests = [];
  }

  greeting() {
    return `Hi, my name is ${this.name}`;
  }

  bio() {
    return `My name is ${this.name}. I am ${this.age} years old, and my interests are ${this.interests}.`;
  }
}
const person = new Person("Kedar Kandel", 29);
person.interests = ["sports", "music", "travelling"];
console.log(person.greeting()); //Hi, my name is Kedar Kandel

console.log(person.bio()); // My name is Kedar Kandel. I am 29 years old, and my interests are sports,music,travelling
