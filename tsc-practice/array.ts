let list = [1, 2, 3];
let list1: number[] = [1, 2, 3]; // 보통은 이 방식 사용
let list2: Array<number> = [1, 2, 3]; // jsx나 tsx에서 충돌할 수 있어 사용을 자제
let list3: (number | string)[] = [1, 2, 3, "4"]; // 유니온 타입 지정 가능
// [25,"lee"]와 같이 첫째는 무조건 숫자, 둘째는 무조건 문자면 튜플 타입으로 설정 가능
