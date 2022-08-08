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
  public constructor(private _name: string, private age: number) {}

  // get을 하는 함수를 getter
  // 읽기전용
  get name() {
    return this._name + " Lee";
  }

  // set을 하는 함수를 setter
  // 쓰기전용
  set name(n: string) {
    this._name = n;
  }
}

const p1: Person = new Person("Lee", 25);
console.log(p1.name);
p1.name = "Duck";
console.log(p1.name);
