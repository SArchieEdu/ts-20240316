["", "", ""].map(() => 1); // [1, 1, 1]

interface City {
  name: string;
}
interface Address {
  city: City;
  region: string;
  street: string;
  house: number;
  flat: number;
  country: string;
}

type AddressKeys = keyof Address; // 'street' | 'house'
type House = Address["house"];

type AddressCopy = {
  [Property in keyof Address]: Address[Property];
};

type PartialAddress = {
  [Property in keyof Address]?: Address[Property];
};

type ReadonlyAddress = {
  readonly [Property in keyof Address]: Address[Property];
};

type AddressGetters = {
  [Property in keyof Address as `get${Capitalize<Property>}`]: () => Address[Property];
};

type AddressSetters = {
  [Property in keyof Address as `set${Capitalize<Property>}`]: (
    value: Address[Property]
  ) => void;
};

type CompleteAddress = Address & AddressGetters & AddressSetters;

class AddressClass implements CompleteAddress {
  city: City;
  region: string;
  street: string;
  house: number;
  flat: number;
  country: string;
  getCity: () => City;
  getRegion: () => string;
  getStreet: () => string;
  getHouse: () => number;
  getFlat: () => number;
  getCountry: () => string;
  setCity: (value: City) => void;
  setRegion: (value: string) => void;
  setStreet: (value: string) => void;
  setHouse: (value: number) => void;
  setFlat: (value: number) => void;
  setCountry: (
    value: string // [1, 1, 1]
  ) => void;
}

// type PartialAddress = {
//   [Property in "flat" | "house"]?: Address[Property];
// };

// type ReadonlyAddress = {
//   readonly [Property in keyof Address as Property extends "flat" | "house"
//     ? never
//     : Property]: Address[Property];
// };

// type PartialReadonly<Entity, Properties extends keyof Entity> = {
//   [Property in Properties]: Entity[Property];
// } & {
//   readonly [Property in keyof Entity as Property extends Properties
//     ? never
//     : Property]: Entity[Property];
// };

// type MyType = PartialReadonly<Address, "flat" | "house">;

interface TvSeries {
  title: string;
  seasonCount: number;
}
