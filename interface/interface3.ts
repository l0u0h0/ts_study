interface IPerson {
  name: string;
  age?: number;
}

interface IKorean extends IPerson {
  city: string;
}

const k: IKorean = {
  name: "나덕경",
  city: "수원",
  age: 29,
};
