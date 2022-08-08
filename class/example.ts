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
  public readonly name: string = "Lee";
  private readonly country: string;

  public constructor(private _name: string, private age: number) {
    this.country = "Korea";
  }

  hello() {
    console.log(this.country);
  }
}

const p1: Person = new Person("Lee", 25);
console.log(p1.name);
p1.hello();
// p1.name = "Duck";
// console.log(p1.name);
