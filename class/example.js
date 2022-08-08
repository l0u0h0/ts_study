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
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const p1 = new Person("Lee", 25);
console.log(p1);
