"use strict";
// class Person {
//   name;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const p1 = new Person("Lee");
// console.log(p1);
class Person {
    constructor(age) {
        this.name = "Lee";
        this.age = age;
    }
}
const p1 = new Person(25);
console.log(p1);
console.log(p1.age);
