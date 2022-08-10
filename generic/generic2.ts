function helloBasic<T>(message: T): T {
  return message;
}

// <> 속에 지정한 타입이 아니면 에러 발생
helloBasic<string>("Hello");
// 지정하지 않으면 들어간 값에 의해 T가 추론이 됨.
// T 자체가 25라는 타입이 됨.
helloBasic(25);

// 여러 개를 사용할 수도 있음
function helloBasic2<T, U>(message: T, commnet: U): T {
  return message;
}
// 여러 개를 지정해줘야 함.
helloBasic2<string, number>("Duck", 25);
helloBasic2(25, 23);
