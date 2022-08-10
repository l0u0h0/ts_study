function helloArray<T>(message: T[]): T {
  return message[0];
}

// T => string 로 추론됨.
helloArray(["Hello", "World"]);
// T => string | number 의 union type 으로 추론됨.
helloArray(["Hello", 25]);

function helloTuple<T, K>(message: [T, K]): T {
  return message[0];
}

// T, K => string 으로 추론됨.
helloTuple(["Hello", "World"]);
// T, K => string, number 으로 각각 추론됨.
helloTuple(["Hello", 2]);
