// class Person {
//   name;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const p1 = new Person("Lee");

// console.log(p1);

class Person {
  constructor(public name: string, public age: number) {}
}

const p1: Person = new Person("Lee", 25);
console.log(p1);
