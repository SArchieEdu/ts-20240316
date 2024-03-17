interface Dog {
  weight: number;
  color: string;
  readonly bark: () => void;
}

interface Animal {
  height: number;
}

interface Address {
  street: string;
  house: number;
}

interface Pet extends Dog, Animal {
  name: string;
  address: string;
  phoneNumber: string;
}

// class Dog {
//   weight: number;
//   color: string;
//   name: string;
//   bark() {}
// }

export const frenchBulldog: Pet = {
  name: "Bobik",
  address: "",
  phoneNumber: "",
  weight: 12,
  height: 12,
  color: "fawn",
  bark() {},
};

frenchBulldog.weight = 14;
frenchBulldog.color = "";

const corgi: Dog = {
  weight: 10,
  color: "golden",
  bark() {},
};
