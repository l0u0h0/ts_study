// function returnVoid(message: string): void
function returnVoid(message: string): void {
  console.log(message);

  // 유일하게 void에 할당할 수 있는 값
  return undefined;
}
// const r: void
const r = returnVoid("리턴이 없다.");
