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
  [index: string]: "male" | "female";
  // 항상 존재해야하는 프로퍼티가 있다면
  duck: "male" = "male";
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
