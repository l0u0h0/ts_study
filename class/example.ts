// class Person {
//   name;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const p1 = new Person("Lee");

// console.log(p1);

class Person {
  name: string = "Lee";
  age!: number;

  constructor(age?: number) {
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }

  async init() {}
}

const p1: Person = new Person(25);
await p1.init();
const p2: Person = new Person();
console.log(p1);
console.log(p1.age);
