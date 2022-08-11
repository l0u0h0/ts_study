class Person<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

// 지정안하면 알아서 추론됨.
new Person("Yuhan", 25);
// 이렇게 지정해주면 string만 들어가야함
new Person<string, number>("Duck", 25);
