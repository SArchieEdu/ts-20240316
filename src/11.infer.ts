export let str = "";

// function calculate(a: number) {
//   if (a === 5) {
//     return true;
//   }

//   if (a > 0) {
//     return 0;
//   }

//   if (a < 0) {
//     return "";
//   }

//   if (a === 0) {
//     return null;
//   }

//   return { a: "" };
// }

interface Film {
  title: {
    originalTitle: string;
  };
  releaseDate: number;
  genre: string;
}

function getProperty<Entity, Key extends keyof Entity>(
  object: Entity,
  key: Key
): Entity[Key] {
  return object[key];
}

getProperty({ a: "", b: 123 }, "b");

function call<Arguments extends unknown[], ReturnType>(
  callback: (...args: Arguments) => ReturnType,
  ...args: Arguments
): ReturnType {
  return callback(...args);
}

const calculate = (a: number, b: number): number => {
  return a + b;
};

const result = call(calculate, 12, 14);

type FunctionReturnType<FunctionType extends (...args: any[]) => unknown> =
  FunctionType extends (...args: any[]) => infer ReturnType
    ? ReturnType
    : never;

type FunctionParamsType<FunctionType extends (...args: any[]) => unknown> =
  FunctionType extends (...args: infer Params) => any ? Params : never;

type ComponentProps<FunctionType extends (...args: any[]) => unknown> =
  FunctionType extends (...args: [infer Props, ...any]) => any ? Props : never;

type GetProperty<FunctionType extends {}> = FunctionType extends {
  title: { originalTitle: infer Property };
}
  ? Property
  : never;

type MyFunctionReturnType = FunctionReturnType<typeof calculate>;
type MyFunctionParamsType = FunctionParamsType<typeof calculate>;

const Button = (props: { size: string; title: string }) => {
  return {};
};

type Props = ComponentProps<typeof Button>;
type Property = GetProperty<Film>;
