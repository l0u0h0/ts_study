interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: "Donghyeon",
  age: 25,
};

// IPesron[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | n<umber
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getProp(person, "name");

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

setProp(person, "name", "InSeok");
