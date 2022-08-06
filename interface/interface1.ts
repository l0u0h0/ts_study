interface Person1 {
  name: string;
  age: number;
}

interface Person2 {
  name: string;
  age?: number;
}

function hello1(person: Person1): void {
  console.log(`안녕하세요. ${person.name} 입니다.`);
}

function hello2(person: Person2): void {
  console.log(`안녕하세요. ${person.name} 입니다.`);
}

const p1: Person1 = {
  name: "Lee",
  age: 25,
};

hello1(p1);
hello2({ name: "Lee", age: 25 });
hello2({ name: "Anna" });
