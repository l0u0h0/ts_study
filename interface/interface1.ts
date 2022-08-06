interface Person1 {
  name: string;
  age: number;
}

interface Person2 {
  name: string;
  age?: number;
}

interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;
}

interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

function hello1(person: Person1): void {
  console.log(`안녕하세요. ${person.name} 입니다.`);
}

function hello2(person: Person2): void {
  console.log(`안녕하세요. ${person.name} 입니다.`);
}

function hello3(person: Person3): void {
  console.log(`안녕하세요. ${person.name} 입니다.`);
}

const p1: Person1 = {
  name: "Lee",
  age: 25,
};

const p31: Person3 = {
  name: "Lee",
  age: 25,
};
const p32: Person3 = {
  name: "Duck",
  sisters: ["Eom", "Choi"],
};
const p33: Person3 = {
  name: "Yoon",
  father: p31,
  mother: p32,
};

const p41: Person4 = {
  name: "Lee",
  age: 25,
  hello: function (): void {
    console.log(`안녕하세요. ${this.name} 입니다.`);
  },
};
const p42: Person4 = {
  name: "Duck",
  age: 18,
  hello(): void {
    console.log(`안녕하세요. ${this.name} 입니다.`);
  },
};
const p43: Person4 = {
  name: "Eom",
  age: 45,
  hello: (): void => {
    // arrow func에서는 this 사용 불가
    // console.log(`안녕하세요. ${this.name} 입니다.`);
  },
};

hello1(p1);
hello2({ name: "Lee", age: 25 });
hello2({ name: "Anna" });
hello3(p33);
p41.hello();
p42.hello();
