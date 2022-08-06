interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: "Lee",
  gender: "male",
};

// p81.gender = 'female'
