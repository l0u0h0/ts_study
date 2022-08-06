"use strict";
function hello1(person) {
    console.log(`안녕하세요. ${person.name} 입니다.`);
}
function hello2(person) {
    console.log(`안녕하세요. ${person.name} 입니다.`);
}
function hello3(person) {
    console.log(`안녕하세요. ${person.name} 입니다.`);
}
const p1 = {
    name: "Lee",
    age: 25,
};
const p31 = {
    name: "Lee",
    age: 25,
};
const p32 = {
    name: "Duck",
    sisters: ["Eom", "Choi"],
};
const p33 = {
    name: "Yoon",
    father: p31,
    mother: p32,
};
hello1(p1);
hello2({ name: "Lee", age: 25 });
hello2({ name: "Anna" });
hello3(p33);
