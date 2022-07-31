declare const maybe: unknown;

// 타입 가드,
if (typeof maybe === "number") {
  const aNum: number = maybe;
}

if (maybe === true) {
  const aBoolean: boolean = maybe;
  // const aString: string = maybe; error
}

if (typeof maybe === "string") {
  const aString: string = maybe;
}
