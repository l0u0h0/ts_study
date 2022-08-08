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
    }
    get name() {
        // console.log("get");
        return this._name + " Lee";
    }
    set name(n) {
        console.log("set");
        this._name = n;
    }
}
const p1 = new Person("Lee", 25);
console.log(p1.name); // get을 하는 함수를 getter
p1.name = "Duck"; // set을 하는 함수를 setter
console.log(p1.name);
