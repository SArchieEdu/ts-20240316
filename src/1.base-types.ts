// Boolean
export let isTrue: boolean;
// isTrue = 123;
isTrue = true;

// Number
let num: number = 10;
let float: number = 10.67;
let binary: number = 0b101;
num = 10.6;

// BigInt
Number.MAX_SAFE_INTEGER;
let bigNumber: bigint = 100n;

// num = 100n;
// bigNumber = 100;

// String
let str: string;
str = `${num}`;

// Null
let nullLet: null = null;
nullLet = null;
// nullLet = 123;

// Undefined
let undefinedLet: undefined = undefined;
undefinedLet = undefined;

// undefinedLet = null;
// nullLet = undefined;

// Object
let objLet: { a: string; b: number; c: { d: { f: number } } } = {
  a: "",
  b: 123,
  c: { d: { f: 123 } },
};

objLet = {
  a: "",
  b: 23423472348,
  c: { d: { f: 123 } },
};

// Array
let arrayLet: string[] = ["123", "asdas"];

// Tuple
let tuple: [string, number, { a: number }] = ["", 123, { a: 123 }];
let tuple2: [string, string, string] = ["", "", ""];

// Any
let anyLet: any = 131;
anyLet = "";
anyLet = [];
anyLet = undefined;
anyLet.a;
num = anyLet;

// Unknown
let unknownLet: unknown = { a: "123", b: 123 };
// num = unknownLet;
// unknownLet.a;

// function
function calculate(a: number, b: number): number | string {
  if (a > b) {
    return a + b;
  }

  return "";
}

const log = (a: string, b: () => string): void => {};

log("a", () => "");

// never;
let a: never;

// &
let intersection: string & number;
let intersection2: { a: string } & { b: number } = { a: "", b: 123 };

// |
let union: string | number;
let union2: { a: string } | { b: number } = { a: "" };

function transform(a: { b: string; d: string } | { c: string; d: number }) {
  return a.d;
}

transform({ c: "", d: 123 });

// LiteralTypes
let fontWeight: 500 | 600 | "bold" = 600;
let size: "s" | "m" | "l";
