const enum Size {
  s = "s",
  m = "m",
  l = "l",
}

// Object.values(Size);

type MySize = "s" | "m" | "l";
export const Sizes = {
  s: "s",
  m: "m",
  l: "l",
} as const;
export type Sizes = keyof typeof Sizes;

function calculateSize(size: Sizes) {}

calculateSize(Sizes.l);
calculateSize("m");

let size: Size;

size = Size.l;
