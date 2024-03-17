export type Dog = {
  weight: number;
  color: string;
  readonly bark: () => void;
};

interface Animal {
  height: number;
}

interface Address {
  street: string;
  house: number;
}

type Pet = Dog &
  Animal & {
    name: string;
    address: Address;
    phoneNumber: string;
  };

type MyString = string;

type Data = [number, number];

const data: Data = [123, 123];

type Size = "s" | "m" | "l";
