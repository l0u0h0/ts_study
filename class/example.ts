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

// class Students {
//   [index: string]: "male" | "female";
//   // 항상 존재해야하는 프로퍼티가 있다면
//   duck: "male" = "male";
// }

// const a = new Students();
// a.lee = "male";
// a.jade = "male";

// console.log(a);

// const b = new Students();
// b.chloe = "female";
// b.alex = "male";
// b.anna = "female";

// console.log(b);

// -------===--==-=-===-=-=-==-

// class Person {
//   private static CITY = "Seoul";
//   public hello() {
//     console.log("hello", Person.CITY);
//   }
//   public change() {
//     Person.CITY = "LA";
//   }
// }

// const p1 = new Person();
// p1.hello();
// const p2 = new Person();
// p2.hello();
// p1.change();
// p2.hello();
// Person.hello();

class ClassName {
  private static instance: ClassName | null = null;
  public static getInstance(): ClassName {
    // ClassName으로부터 만든 오브젝트가 있으면 그걸 리턴
    // 없으면 만든다.
    if (ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }
    return ClassName.instance;
  }

  private constructor() {}
}

const a = ClassName.getInstance();
const b = ClassName.getInstance();

console.log(a === b);
