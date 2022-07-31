function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("fail");
}

function infiniteLoop(): never {
  while (true) {}
}

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
