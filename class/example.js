"use strict";
// class Person {
//   name;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const p1 = new Person("Lee");
// console.log(p1);
// class Person {
//   constructor(public name: string, public age: number) {}
// }
// const p1: Person = new Person("Lee", 25);
// console.log(p1);
class Person {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = "Lee";
        this.country = "Korea";
        this.country = "Japan";
    }
    hello() {
        console.log(this.country);
    }
}
const p1 = new Person("Lee", 25);
console.log(p1.name);
p1.hello();
// p1.name = "Duck";
// console.log(p1.name);
