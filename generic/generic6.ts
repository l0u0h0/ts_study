// string, number의 union type에 상속
// type은 항상 가장 작은 범위로 제한을 두는 것이 좋음.
class PersonExtends<T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends("Yuhan");
new PersonExtends(25);
// boolean type은 들어갈 수 없음.
// new PersonExtends(true);
