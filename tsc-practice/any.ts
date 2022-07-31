function returnAny(message: any): any {
  console.log(message);
}
const an1 = returnAny("리턴은 아무거나");

an1.toString();

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
