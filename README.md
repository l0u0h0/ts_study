# TYPESCRIPT

### TypeScript란

- `Typed JavaScript at any Scale`
- 타입을 사용해 자바스크립트를 확장한다.
- 코드를 실행하기 전에 타입스크립트는 에러를 잡거나 고치는데 드는 시간을 절약해준다.
- 어떤 브라우저, 어떤 OS, 어떤 실행환경, 완전한 오픈소스
- 타입스크립트는 `Programming Language`
- 타입스크립트는 `Compiled Language`
  - 전통적인 컴파일 언어와는 다른 점이 많다.
  - 그래서 `Transplie` 이라는 용어를 사용하기도 한다.
- 자바스크립트는 `Interpreted Language`
- `npm i typescript -g`

### 간단한 컴파일러 사용 예제

- 타입스크립트 컴파일러를 글로벌로 설치 후,
  - cli 명령어로 파일 컴파일
  - 특정 프로젝트 폴더에서 타입스크립트 컴파일러 설정에 맞춰 컴파일
  - 특정 프로젝트 폴더에서 타입스크립트 컴파일러 설정에 맞춰 컴파일(watch 모드)
- 프로젝트에 타입스크립트 컴파일러를 설치 후,

  - .bin 안의 명령어로 파일 컴파일
  - npm 스크립트로 파일 컴파일
  - 프로젝트에 있는 타입스크립트 설정에 맞춰, npm 스크립트로 컴파일
  - 프로젝트에 있는 타입스크립트 설정에 맞춰, npm 스크립트로 컴파일 (watch 모드)

- 타입스크립트 컴파일러를 실행하는 명령어는 `tsc 파일명지정`
- 컴파일 했을 때 문제가 없다면 아무것도 없이 지나감
- 컴파일 완료됐을 경우 같은 경로의 같은 이름의 js 파일이 생성됨.

- tsc 컴파일러의 설정을 자동으로 설정해주는 명령어 `tsc --init`
- `tsconfig.json`이 만들어짐.
- 이 파일이 루트에 있는 프로젝트는 그냥 tsc 해주면 모든 ts파일이 컴파일 됨.
- config 파일에 있는 설정대로 모두 컴파일 되기 때문

- `tsc -w`를 사용하면 와치모드가 되어 파일이 수정될때마다 컴파일됨.

- tsc를 글로벌로 설치하지 않았을 때 실행하는 법
  - `node_modules/.bin/tsc`
  - `node_modules/typescript/bin/tsc`
- 보통은 위에 cli로 실행하지만 꽤 길다.
- 새로운 기능으로 `npx tsc`로 실행 가능하다.
- 이렇게 하기 위해 `npx tsc --init`을 해줘서 config 파일을 생성해준다.
- `npx tsc -w`로 와치모드 가능
- 이 프로젝트의 어떤 스크립트가 돌아갈 수 있는지 등록 가능
- package.json에 scripts 항목에 build에 tsc를 넣어주면
- `npm run build`로 자동으로 tsc 실행가능
- `npm run build:warch` 로 와치모드 가능
- 이것도 scripts 항목에 커스터마이징 가능

- ### VSCODE
- Typescript Compiler
  - VS Code에 내장 컴파일러 존재
  - 내장 컴파일러 버전은 vscode가 업데이트 되면서 올라간다.
    - 컴파일러 버전과 vscode의 버전은 상관 관계
  - 내장된 컴파일러를 선택할 수 있고, 직접 설치한 컴파일러를 선택할 수도 있다.

### First Type Annotation

- typescript 고유의 기능
- 타입스크립트는 `let`이라는 코드와 함께 값이 할당되면 문자열로 지정이 된다.
- `Type Annotation`
  - 타입을 지정해주는 일
  - 콜론을 뒤에 붙여 타입을 지정해준다.
  - `let a: string;`
- func도 마찬가지로 인자로 받을 때 타입을 지정해줄 수 있다.

```ts
function hello(b: number) {
  return b;
}
hello(12);
// hello("Yuhan");
```

### TS vs JS

- TS - Static Types
  - set during development
- JS - Dynamic Types
  - resolved at runtime
- 타입스크립트는 개발하는 중간에 타입을 체크하고
- 자바스크립트는 실제로 런타입에 돌입해야만 오류를 체크할 수 있다.
- 프로그램이 유용하려면, 가장 간단한 데이터 단위로 작업할 수 있어야 한다.
- numbers, strings, structures, boolean 등등
- 타입스크립트에서 우리는 JS에서 기대하는 것과 동일한 타입을 지원하며,  
  돕기 위해 추가적인 열거 타입이 제공되었다.
- 자료형 종류
  - 기본 자료형(JS 기본 자료형)
    - `Boolean`
    - `Number`
    - `String`
    - `Null`
    - `Undefined`
    - `Symbol` (ES6에 추가)
    - `Array`: object형
  - 프로그래밍을 도울 몇 가지 타입이 더 제공
    - `Any`, `Void`, `Never`, `Unknown`
    - `Enum`
    - `Tuple`: object형

### Primitive Type

- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
- 프리미티브 형의 내장 함수를 사용 가능한 것은 JS 처리 방식 덕분
- ES2015기준 6가지

  - `boolean`
  - `number`
  - `string`
  - `symbol`(ES2015)
  - `null`
  - `undefined`

- literal 값으로 프리미티브 타입의 서브 타입을 나타낼 수 있다.
- 또는 래퍼 객체로 만들 수 있다.

```ts
new Boolean(false); // typeof new Boolean(false) : 'object';
new String("world"); // typeof new String('world') : 'object';
new Number(42); // typeof new Number(42) : 'object';
```

##### Type Casing

- TS 의 핵심 프리미티브 타입은 모두 소문자이다.
- Number, String, Boolean, Symbol 또는 Object 유형이 위에서 권장한 소문자 버전과  
  동일하다고 생각할 수 있지만 이러한 유형은 프리미티브 언어를 나타내지 않으며  
  타입으로 사용해서는 안된다.

```ts
function reverse(s: String): String {
  return s.split("").reverse().join("");
}
reverse("hello world");
```

- 대신 number, string, boolean, object, symbol 타입을 사용해야한다.

```ts
function reverse(s: string): string {
  return s.split("").reverse().join("");
}
reverse("hello world");
```

### Boolean

```ts
let isDone: boolean = false;

isDone = true;

console.log(typeof isDone); // 'boolean'

let isOK: Boolean = true;

let isNotOK: boolean = new Boolean(true); // ERROR
```

### Number

- JS와 같이 TS의 모든 숫자는 부동 소수점 값이다.
- TS는 16진수 및 10진수 리터럴 외에도 ES2015에 도입된 2진수 및 8진수를 지원
- NaN
- 1_000_000과 같은 표기 가능

```ts
let decimal: number = 10;

// 16진수
let hex: number = 0xf00d;

// 2진수
let binary: number = 0b1010;

// 8진수
let octal: number = 0o744;

let notANumber: number = NaN;

let underscoreNum: number = 1_000_000;
```

### String

- 다른 언어에서와 마찬가지로 텍스트 형식을 참조하기 위해 `string` 형식 사용
- JS와 마찬가지로 TS는 문자열 데이터를 둘러싸기 위해  
  큰 따옴표("")나, 작은 따옴표('')를 사용한다.

```ts
let myName: string = "LeeYuHan";
```

- `Template String`
- 행에 걸쳐있거나, 표현식을 넣을 수 있는 문자열
- 이 문자열은 백틱 기호에 둘러쌓여 잇다.
- 포함된 표현식은 `${expr}`와 같은 형태로 사용된다.

```ts
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
```

### Symbol

- ES2015의 Symbol
- new Symbol로 사용할 수 없다.
- Symbol을 함수로 사용해 symbol 타입을 만들어낼 수 있다.

```ts
console.log(Symbol("foo") === Symbol("foo"));
// false
```

- 프리미티브 타입의 값을 담아서 사용한다.
- 고유하고 수정불가능한 값으로 만들어준다.
- 그래서 주로 접근을 제어하는데 쓰는 경우가 많았다.

```ts
const sym = Symbol();

const obj = {
  [sym]: "value",
};

obj[sym];
```

### null & undefined

- TS에서 둘은 실제로 각각 undefined 및 null 이라는 타입을 가진다.
- void 와 마찬가지로 그 자체로는 유용하지 않다.
- 둘 다 소문자만 존재한다.

```ts
// 이 변수들에 할당할 수 있는 것들은 거의 없다.
let u: undefined = undefined;
let n: null = null;
```

- 둘은 다른 모든 타입의 서브 타입으로 존재한다.
- number에 둘 다 할당할 수 있다는 의미이다.
- 하지만 컴파일 옵션에서 `--strictNullChecks` 사용하면, null과 undefined는 void나 자기 자신들에게만 할당할 수 있다.

  - void에 null은 넣을 수 없다.
  - 이 경우 null과 undefined 를 할당할 수 있게 하려면 union type을 이용해야 한다.

- null 이라는 값으로 할당된 것을 null이라고 한다.
- 무언가가 있는데, 사용할 준비가 덜 된 상태
- null이라는 타입은 null이라는 값만 가질 수 있다.
- 런타임에서 typeof 연산자를 이용해서 알아내면 object형이다.

```ts
let n: null = null;

console.log(n); // null
console.log(typeof n); // object
```

- 값을 할당하지 않은 변수는 undefined라는 값을 가진다.
- 무안가가 아예 준비가 되지 않은 상태
- object의 프로퍼티가 없을 때도 undefined 이다.
- null과 다르게 런타임에서 typeof를 해보면 undefined이다.

```ts
let u: undefined = undefined;

console.log(u); // undefined
console.log(typeof u); // undefined
```

### object

```ts
// create by object literal
const person1 = { name: "Lee", age: 39 };

// person1 is not "object" type.
// person1 is "{name: string, age: number}" type.

// create by Object.create
const person2 = Object.create({ name: "Lee", age: 25 });
```

- `primitive type이 아닌 것`을 나타내고 싶을 때 사용하는 타입

### Array

- 원래 자바스크립트에서 객체이다
  - Array<type>
  - 타입[]

```ts
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

### Tuple

- 배열은 항상 공통 요소의 모임
- 튜플은 길이가 정해져있고 앞 뒤의 타입이 정확하고 다를 수 잇는 자료형이다.

```ts
let x: [string, number];

x = ["hello", 415];

// 위치를 맞춰서 타입 지정
// x = [10, "lee"]; - error
// 지정된 index가 넘어선 범위에는 undefined가 지정되어 에러남.
// x[2] = "hello"; - wrong length

const person: [string, number] = ["Lee", 25];

// distructoring
const [first, second] = person;
// const first: string
// const second: number
```

### any

- 어떤 것이나 된다.
- 어떤 타입이어도 상관없는 타입이다.
- 이걸 최대한 쓰지 않는게 핵심
- 왜냐면 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문
- 그래서 컴파일 옵션 중에 `any`를 써야하는데 쓰지 않으면 오류가 나도록 하는 옵션이 있다.
  - `noImplicitAny`

```ts
function returnAny(message: any): any {
  console.log(message);
}
const an1 = returnAny("리턴은 아무거나");

an1.toString();
```

- any는 계속해서 개체를 통해 전파된다.
- 결국, 모든 편의는 타입 안전성을 잃는 대가로 온다는 것을 기억
- 타입 안정성은 타입스크립트를 사용하는 주요 ㄷㅇ기 중 하나이며 필요하지 않은  
  경우에는 any를 사용하지 않도록 해야한다.

```ts
let looselyTyped: any = {};
const d = looselyTyped.a.b.c.d;
//    ^ = let d: any

function leakingAny(obj: any) {
  const a: number = obj.number; // 타입 지정을 안해주면 a,b,c 모두 any 형식
  const b = a + 1;
  return b;
}

const c = leakingAny({ number: 0 });
// c.indexOf("0"); number에는 indexOf가 없어서 에러
```

### unknown

- 응용프로그램을 작성할 때는 모르는 변수의 타입을 묘사해야할 수도 있다.
- 이러한 값은 동적 콘텐츠(예: 사용자로부터, 또는 우리 API의 모든 값을 의도적으로 수락하기를 원할 수 있다.)
- 이 경우, 컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이든 될 수 있음을  
  앙려주는 타입을 제공하기를 원하므로 `unknown` 타입을 제공한다.
- 타입스크립트 3.0부터 지원
- any와 짝으로 any보다 Type-safe한 타입
  - any와 같이 아무거나 할당할 수 있다.
  - 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
  - 타입을 확정해주지 않으면 다른 곳에 할당할 수 없고, 사용할 수 없다.
- unknown 타입을 사용하면 runtime error 를 줄일 수 있을 것 같다.
  - 사용 전에 데이터의 일부 유형의 검사를 수행해야함을 알리는 API에 사용할 수 있을 것 같다.

```ts
declare const maybe: unknown;

// 타입 가드,
if (typeof maybe === "number") {
  const aNum: number = maybe;
}

if (maybe === true) {
  const aBoolean: boolean = maybe;
  // const aString: string = maybe; error
}

if (typeof maybe === "string") {
  const aString: string = maybe;
}
```

### never

- 일반적으로는 리턴에 사용된다.

```ts
function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("fail");
}

function infiniteLoop(): never {
  while (true) {}
}
```

- never 타입은 모든 타입의 서브타입이며, 모든 타입에 할당할 수 있다.
- 하지만 never에는 그 어떤 것도 할당할 수 없다.
- any 조차도 never에게 할당할 수 없다.
- 잘못된 타입을 넣는 실수를 막고자 할때 사용할 수 있다.

```ts
let a: string = "hello";

if (typeof a !== "string") {
  a; // let a: never;
}

declare const a1: string | number;

if (typeof a1 !== "string") {
  a1; // cont a1: number;
}
// 잘못된 타입을 넣으면 never 출력
type Indexable<T> = T extends string ? T & { [index: string]: any } : never;
// ObjectIndexable: never
type ObjectIndexable = Indexable<{}>;
```

### void

```ts
// function returnVoid(message: string): void
function returnVoid(message: string): void {
  console.log(message);

  // 유일하게 void에 할당할 수 있는 값
  return undefined;
}
// const r: void
const r = returnVoid("리턴이 없다.");
```

### 작성자와 사용자의 관점으로 코드 바라보기

- 타입 시스템
  - 컴파일러에게 사용하는 타입을 명시적으로 지정하는 시스템
  - 컴파일러가 자동으로 타입을 추론하는 시스템
- 타입스크립트의 타입 시스템
  - 타입을 명시적으로 지정할 수 잇다.
  - 타입을 명시적으로 지정하지 않으면, 타입스크립트 컴파일러가 자동으로 타입을 `추론`

---

- 하나의 함수를 두고 해당 함수를 사용하는 사람과 해당 함수를 작성한 사람의 관점
- 타입이란 해당 변수가 할 수 있는 일을 결정한다.
-

```js
// f1이라는 함수의 body 에서는 a를 사용할 것
// a 가 할 수 있는 일은 a의 타입이 결정
function f1(a) {
  return a;
}
```

- 함수 사용법에 대한 오해를 야기하는 자바스크립트
-

```js
// (f2 실행의 결과가 NaN을 의도한 것이 아니라면)
// 이 함수의 작성자는 매개변수 a가 number 타입이라는 가정으로 함수를 작성했다.
function f2(a) {
  return a * 28;
}
// 사용자는 사용법을 숙지하지 않은 채, 문자열을 사용
console.log(f2(10)); // 280
console.log(f2("Lee")); // NaN
```

- 타입스크립트의 추론에 의지하는 경우
-

```ts
// 타입스크립트 코드지만,
// a의 타입을 명시적으로 지정하지 않았기에 a는 any로 추론
// 함수의 리턴 타입은 number로 추론 (NaN도 number의 하나이다.)
function f3(a) {
  return a * 28;
}
// 사용자는 a가 any 이기 때문에 사용법에 맞게 문자열을 사용하여 함수를 실행
console.log(f3(10)); // 280
console.log(f3("Lee") + 5); // NaN
```

---

- `noImplicitAny` 옵션을 켜면
  - 타입을 명시적으로 지정하지 않은 경우,  
    타입스크립트가 추론 중 `any`라고 판단하게 되면,  
    컴파일 에러를 발생시켜  
    명시적으로 지정하도록 유도한다.
- `noImplicitAny`에 의한 방어
-

```ts
// error TS7006: Parameter 'a' implicitly has an 'any' type.
function f3(a) {
  return a * 38;
}
// 사용자의 코드를 실행할 수 없다. 컴파일이 정상적으로 마무리 될 수 있도록 수정해야 한다.
console.log(f3(10));
console.log(f3("Lee") + 5);
```

- number 타입으로 추론된 리턴 타입
-

```ts
// 매개변수의 타입은 명시적으로 지정햇다.
// 명시적으로 지정하지 않은 함수의 리턴 타입은 number로 추론
function f4(a: number) {
  if (a > 0) {
    return a * 28;
  }
}
// 사용자는 사용법에 맞게 숫자형을 사용하여 함수를 실행
// 해당 함수의 리턴 타입은 number이기 때문에 타입에 따르면 이어진 연산을 바로 수행
// 하지만 실제 undefined + 5가 실행되어 NaN이 출력
console.log(f4(5)); // 190
console.log(f4(-5) + 5); // NaN
```

---

- `strictNullChecks` 옵션을 켜면
  - 모든 타입에 자동으로 포함되어 있는  
    `null`과 `undefined`를  
    제거해준다.
- `number | undefined` 타입으로 추론된 리턴 타입
-

```ts
// 매개변수의 타입은 명시적으로 지정했다.
// 명시적으로 지정하지 않은 함수의 리턴 타입은
// number | undefined 로 추론
function f4(a: number) {
  if (a > 0) {
    return a * 28;
  }
}
// 사용자는 사용법에 맞게 숫자형을 사용하여 함수를 실행
// 해당 함수의 리턴 타입은 number | undefined 이기에
// 타입에 따르면 이어진 연산을 바로 할 수 없다.
// 컴파일 에러를 고쳐야하기 때문에 사용자와 작성자가 의논을 해야함.
console.log(f4(5));
console.log(f4(-5) + 5);
// error TS2532: Object is possibly 'undefined'.
```

- 명시적으로 리턴 타입을 지정해야할까?
-

```ts
// 매개변수의 타입과 함수의 리턴 타입을 명시적으로 지정했다.
// 실제 함수 구현부의 리턴 타입과 명시적으로 지정한 타입이 일치하지 않아 컴파일 에러가 발생
// error TS2366: Function lacks ending return statement and return type does not inc
function f5(a: number): number {
  if (a > 0) {
    return a * 28;
  }
}
```

- `noImplicitReturns` 옵션을 켜면
  - 함수 내에서 모든 코드가 값을 리턴하지 않으면,  
    컴파일 에러를 발생시킨다.
- 모든 코드에서 리턴을 직접해야한다.
-

```ts
// if가 아닌 경우 return을 직접하지않고 코드가 종료
// error TS7030: Not all code paths return a value.
function f5(a: number) {
  if (a > 0) {
    return a * 28;
  }
}
```

---

- 매개변수에 `object`가 들어오는 경우
-

```js
// JS
function f6(a) {
  return `이름은 ${a.name} 이고, 연령대는 ${
    Math.floor(a.age / 10) * 10
  }대 입니다.`;
}
console.log(f6({ name: "Lee", age: 25 })); // 이름은 Lee이고, 연령대는 20대입니다.
console.log(f6("Lee")); // 이름은 undefined이고, 연령대는 NaN대입니다.
```

- `object literal type`
-

```ts
function f7(a: { name: string; age: number }): string {
  return `이름은 ${a.name} 이고, 연령대는 ${
    Math.floor(a.age / 10) * 10
  }대 입니다.`;
}
console.log(f7({ name: "Lee", age: 25 })); // 이름은 Lee이고, 연령대는 20대입니다.
console.log(f7("Lee")); // error TS2345: Argument of type 'string' is not assignable to parameter of type '{ name: string; age: number}'.
```

---

- 나만의 타입을 만드는 방법
-

```ts
interface PersonInterface {
  name: string;
  age: number;
}
type PersonTypeAlias = {
  name: string;
  age: number;
};
function f8(a: PersonInterface): string {
  return `이름은 ${a.name} 이고, 연령대는 ${
    Math.floor(a.age / 10) * 10
  }대 입니다.`;
}
console.log(f8({ name: "Lee", age: 25 })); // 이름은 Lee이고, 연령대는 20대입니다.
console.log(f8("Lee")); // error TS2345: Argument of type 'string' is not assignable to parameter of type 'PersonInterface'.
```

---

### Structural Type System<br/>VS<br/>Nominal Type System

- TS = Structural Type System
- 구조가 같으면, 같은 타입이다.

```typescript
interface IPerson {
  name: string;
  age: number;
  speak(): string;
}
type PersonType = {
  name: string;
  age: number;
  speak(): string;
};
// 두 개는 구조가 같기에 같은 것이다.
let personInterface: IPerson = {} as any;
let personType: PersonType = {} as any;

personInterface = personType;
personType = personInterface;
```

- C, JAVA = Nominal Type System
- 구조가 같아도 이름이 다르면, 다른 타입이다.

```ts
type PersonID = string & { readonly brand: unique symbol };

function PersonID(id: string): PersonID {
  return id as PersonID;
}

function getPersonById(id: PersonID) {}

getPersonById(PersonID("id-aaaaa"));
getPersonById("id-aaaaa");
// error TS2345: Argument of type 'string' is not assignable to parameter of type 'PersonID'. Type 'string' is not assignable to type '{ readonly brand: unique symbol; }'.
```

- `duck typing`
- 런타임에 발생하는 타이핑 방식
- 만약 어떤 새가 오리처럼 걷고, 헤엄치고, 꽥꽥거리는 소리를 낸다면  
  나는 그 새를 오리라고 부를 것이다.

```python
class Duck:
  def sound(self):
    print u"꽥꽥"

class Dog:
  def sound(self):
    print u"멍멍"

def get_sound(animal):
  animal.sound()

def main():
  bird = Duck()
  dog = Dog()
  get_sound(bird)
  get_sound(dog)
```

### 타입 호환성(Type Compatibility)

- 서브타입(1)

```ts
// sub1 타입은 sup1 타입의 서브 타입이다.
// sub1은 리터럴 타입으로 1이다.
let sub1: 1 = 1;
// sup1에는 sub1을 넣을 수 있지만
let sup1: number = sub1;
// sub1에는 sup1을 넣을 수 없다.
sub1 = sup1; // error! Type 'number' is not assignable to type '1'.

// sub2 타입은 sup2 타입의 서브 타입이다.
// sub2는 넘버로 된 배열이다.
let sub2: number[] = [1];
// sup2는 오브젝트이다. 배열도 오브젝트의 하나이기에 sub2를 넣어줄 수 있다.
let sup2: object = sub2;
// 오브젝트가 더 상위의 타입이기에 반대는 넣을 수 없다.
sub2 = sup2; // error! Type '{}' is missing the following properties from type 'number[]': length, pop, push, concat, and 16 more.

// sub3 타입은 sup3 타입의 서브 타입이다.
// sub3은 넘버와 넘버가 들어가는 튜플타입이다.
let sub3: [number, number] = [1, 2];
// Sup3은 넘버의 배열이다. 같은 형태라면 sub3을 넣어줄 수 있지만
let sup3: number[] = sub3;
// 반대의 경우는 넣어줄 수 없다.
sub3 = sup3; // error! Type 'number[]' is not assignable to type '[number, number]'. Target requires 2 element(s) but source may have fewer.

// sub4 타입은 sup4 타입의 서브 타입이다.
let sub4: number = 1;
// any 에는 아무거나 넣을 수 있기에 sub4 포함 가능
let sup4: any = sub4;
// any 이기에 반대의 경우도 할당 가능
// 예외적인 상황
sub4 = sup4;

// sub5 타입은 sup5 타입의 서브 타입이다.
// sub5 는 never가 할당된 타입
let sub5: never = 0 as never;
// never 이기에 넘버에 포함 가능
let sup5: number = sub5;
// 반대의 경우는 에러 발생
sub5 = sup5; // error! Type 'number' is not assignable to type 'number'.

class Animal {}
// 개가 동물에 상속됨.
class Dog extends Animal {
  eat() {}
}

// sub6 타입은 sup6 타입의 서브 타입이다.
// sub6은 개 타입 할당
let sub6: Dog = new Dog();
// 동물에는 sub6 할당 가능
let sup6: Animal = sub6;
// 반대의 경우는 할당 불가능, eat이라는 프로퍼티가 없기 때문
sub6 = sup6; // error! Property 'eat' is missing in type 'SubAnimal' but required in type 'SubDog'.
```

- 1. 같거나 서브타입인 경우, 할당이 가능하다. => 공변

```ts
// primitive type
let sub7: string = "";
let sup7: string | number = sub7;

// object - 각각의 프로퍼티가 대응하는
// 프로퍼티와 같거나 서브타입이어야 한다.
let sub8: { a: string; b: number } = { a: "", b: 1 };
let sup8: { a: string | number; b: number } = sub8;

// array - object 와 마찬가지
let sub9: Array<{ a: string; b: number }> = [{ a: "", b: 1 }];
let sup9: Array<{ a: string | number; b: number }> = sub9;
```

- 2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다 => 반병

```ts
class Person {}
// Person을 상속받은 클래스
class Developer extends Person {
  coding() {}
}
// Developer를 상속받은 클래스
class StartupDeveloper extends Developer {
  burning() {}
}
// tellme라는 함수의 인자는 함수 f를 받는다.
// f는 Developer를 인자로 받아 Developer를 리턴ㅇ하는 함수
function tellme(f: (d: Developer) => Developer) {}

// Developer => Developer 에다가 Developer => Developer 를 할당하는 경우
// Developer를 받아 Developer를 리턴
tellme(function dToD(d: Developer): Developer {
  return new Developer();
});

// Developer => Developer 에다가 Person => Developer 를 할당하는 경우
// Person을 받아 Developer를 리턴
// Person이 상위 클래스이기에 Person이 슈퍼타입인 경우
tellme(function pToD(d: Person): Developer {
  return new Developer();
});

// Developer => Developer 에다가 StartupDeveloper => Developer 를 할당하는 경우
// StartupDeveloper를 받아 Developer를 리턴
tellme(function sToD(d: StartupDeveloper): Developer {
  return new Developer();
});
```

- d => d 의 경우 뭘 하더라도 상관이 없다.
- p => d 의 경우 뭘 하더라도 상관이 없다.
  - `Person`은 `Developer`의 상위이기 때문
- s => d 의 경우 `strictFunctionTypes` 옵션을 키지 않으면 에러가 난다.
  - 왜냐, 마지막 경우의 함수 `sToD`와 함수 `tellme`를 봤을 때 매개변수로 하는  
    d가 하위의 클래스, 즉 서브타입이기 때문이다.
- `StartupDeveloper`가 `Developer`보다 서브타입이기때문
- `strictFunctionTypes` 옵션

  - 함수를 할당할 시에 함수의 매개변수 타입이 같거나 슈퍼타입인 경우가 아닌 경우,  
    에러를 통해 경고한다.

- 타입스크립트는 기본적으로 공변의 타입을 따른다.
- 함수가 할당될 때 그 함수의 매개변수만 반병의 타입을 따른다.
- 반병의 경우에는 융통성을 발휘해 에러를 발생시키지 않을 수 있는데
- `strictFunctionTypes` 옵션을 켜면 에러가 발생할 수 있다.

---

### 타입 별칭(Type Alias)

- `interface`랑 비슷해 보인다.
- `primitive`, `Union Type`을 다르게 부르기 위해 사용하기도 한다.  
  `Tuple`, `Function` 다른 형태의 타입을 여러 번 똑같이 길게 쓰는 것보다  
  앞으로 부를 별칭을 설정하기위해 사용하기도 한다.
- 기타 직접 작성해야하는 타입을 다른 이름으로 지정할 수도 있다.
- 만들어진 타입의 `refer`로 사용하는 것이지, 타입을 만드는 것은 아니다.
- `Aliasing Primitive`

```ts
type MyStringType = string;
const str = "world";
let myStr: MyStringType = "hello";
myStr = str;
/*
별 의미가 없다..
*/
```

- `Aliasing Union Type`

```ts
let person: string | number = 0;
person = "Lee";
type StringOrNumber = string | number;
let another: StringOrNumber = 0;
another = "Lee";
/*
1. 유니온 타입은 A도 가능하고 B도 가능한 타입
2. 길게 쓸 걸 짧게 사용 가능
*/
```

- `Aliasing Tuple`

```ts
let person: [string, number] = ["Lee", 25];
type PersonTuple = [string, number];
let another: PersonTuple = ["Anna", 24];
/*
1. 튜플 타입에 별칭을 줘 여러 군데에서 쉽게 사용할 수 있게 한다.
*/
```

- `Aliasing Function`

```ts
type EatType = (food: string) => void;
```

- `alias`와 `interface`의 차이
  - 타입이 타입으로써의 목적이나 존재 가치가 명확하면 `interface` 사용
  - 그렇지 않고 다른 대상을 가르킬뿐이나 별명으로써만 존재하면 `alias` 사용

---

## Compiler

### Compilation Context

- `Compilation Context`
- 컴파일할 때의 맥락
- 컴파일할 때 어떤 파일과 어떤 옵션을 적용할 것인지에 대한 규명
- 어떤 파일을 컴파일할 지 컴파일을 안할 지에 대한 정보를 담고 있다.
- 타입스크립트를 자바스크립트로 변환할 때 어떤 옵션을 적용할 지에 대한 정보가 담겨있다.
- 보통, `tsconfig.json`이라는 파일에 적혀있다.

### tsconfig schema

- [tsconfig](http://json.schemastore.org/tsconfig)
- 최상위 프로퍼티
  - compileOnSave
  - extends
  - compileOptions
  - files
  - include
  - exclude
  - references
  - ~~typeAcquisition~~
  - ~~tsNode~~
- `files`, `include`, `exclude` 세 개를 묶어  
  어떤 파일을 컴파일할 지 결정
- `compileOptions` 의 내용이 가장 많은 데  
  어떤 옵션으로 컴파일 할 지에 대한 정보가 담김.

### compileOnSave

```json
"compileOnSaveDefinition": {
  "properties": {
    "compileOnSave": {
      "description": "Enable Compile-on-Save for this project.",
      "type": "boolean"
    }
  }
},
```

- `tsconfig.json` 파일에서

```json
{
  "compileOnSave": true,
  "compilerOptions": {,,,
  }
}
```

- 와 같이 작성해주면 파일을 저장할 때 컴파일을 하겠다는 설정이 완료된 것이다.
- true / false(default false)
- `Visual Studio 2015 with TypeScript 1.8.4` 이상
- `atom-typescript` 플러그인

### extends

- `tsconfig.json`도 다른 파일을 상속받고 추가로 사용할 수 있다.

```json
"extendsDefinition": {
  "properties": {
    "extends": {
      "description": "Path to base configuration file to inherit from. Requires TypeScript version 2.1 or later.",
      "type": "string"
    }
  }
},
```

- using

```json
// tsconfig.json
{
  "extends": "./base.json",
  "compilerOptions": {
    ,,,
    // "strict": true, // 꺼진 상태
  }
}
// base.json
{
  "compileOptions": {
    "strict": true,
  }
}
```

- 원래 `strict`가 꺼져있는 상태면

```ts
const a: number = undefined;
```

- 와 같은 코드가 에러가 없을텐데 `base.json`에서 켜져있기에 빨간 줄 발생
- `extends` 옵션을 꺼주면 에러 사라짐
- `extends`
  - 파일 (상대) 경로면: `string`
  - TS 2.1 이상 버젼부터 사용 가능
- [tsconfig/bases](https://github.com/tsconfig/bases/)
  - tsconfig에서 만든 공인된 참조 가능한 설정들
  - 사용은
  - `npm install --save-dev @tsconfig/설정이름`
  - `tsconfig.json`에서
  - `"extends": "@tsconfig/설정이름/tsconfig.json`
