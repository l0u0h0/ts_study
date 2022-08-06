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
const p41 = {
    name: "Lee",
    age: 25,
    hello: function () {
        console.log(`안녕하세요. ${this.name} 입니다.`);
    },
};
const p42 = {
    name: "Duck",
    age: 18,
    hello() {
        console.log(`안녕하세요. ${this.name} 입니다.`);
    },
};
const p43 = {
    name: "Eom",
    age: 45,
    hello: () => {
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
