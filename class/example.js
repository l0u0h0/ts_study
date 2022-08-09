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
// class Person {
//   public readonly name: string = "Lee";
//   private readonly country: string;
//   public constructor(private _name: string, private age: number) {
//     this.country = "Korea";
//   }
//   hello() {
//     console.log(this.country);
//   }
// }
// const p1: Person = new Person("Lee", 25);
// console.log(p1.name);
// p1.hello();
// p1.name = "Duck";
// console.log(p1.name);
// class => object
// {Lee: "male", jade: "male"}
// {chloe: "female", alex: "male", anna: "female"}
class Students {
    constructor() {
        // 항상 존재해야하는 프로퍼티가 있다면
        this.duck = "male";
    }
}
const a = new Students();
a.lee = "male";
a.jade = "male";
console.log(a);
const b = new Students();
b.chloe = "female";
b.alex = "male";
b.anna = "female";
console.log(b);
// -------===--==-=-===-=-=-==-
class Person {
    hello() {
        console.log("hello", Person.CITY);
    }
    change() {
        Person.CITY = "LA";
    }
}
Person.CITY = "Seoul";
const p1 = new Person();
p1.hello();
const p2 = new Person();
p2.hello();
p1.change();
p2.hello();
// Person.hello();
