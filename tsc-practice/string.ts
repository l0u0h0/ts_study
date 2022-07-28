let myName: string = "LeeYuHan";

let fullName: string = `Bob Bobbington`;
let age: number = 35;

let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month`;

// template string을 사용하지 않는 경우
let sentence2: string =
  "Hello, My name is " +
  fullName +
  ".\n\n" +
  "I'll be " +
  (age + 1) +
  " years old next month.";
