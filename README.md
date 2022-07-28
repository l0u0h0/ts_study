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
