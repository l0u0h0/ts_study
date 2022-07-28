"use strict";
let myName = "LeeYuHan";
let fullName = `Bob Bobbington`;
let age = 35;
let sentence = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month`;
// template string을 사용하지 않는 경우
let sentence2 = "Hello, My name is " +
    fullName +
    ".\n\n" +
    "I'll be " +
    (age + 1) +
    " years old next month.";
