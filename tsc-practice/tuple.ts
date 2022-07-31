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
