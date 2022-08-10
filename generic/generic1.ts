function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 더 많은 반복된 함수들이 생기겠죠,,,

function hello(message: any): any {
  return message;
}

// 둘 다 any 형식이기에 length를 사용해도 any로 됨.
console.log(hello("Lee").length);
console.log(hello(39).length);

// 들어온 인풋에 의해 달라지는 타이핑
// 들어온 타입에 따라 T가 결정되며 메세지와 리턴까지 T로 결정
function helloGeneric<T>(message: T): T {
  return message;
}

// 위와는 다르게 string에 length를 사용하는 것으로 됨.
console.log(helloGeneric("DuckGyeong").length);
// 위와는 다르게 number이기에 length가 사용되지않음.
console.log(helloGeneric(25));
// boolean 형식도 넣으면 boolean 타입으로 바뀌는 것을 알 수 있음.
console.log(helloGeneric(true));
