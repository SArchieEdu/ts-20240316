declare module "lodash" {
  export function add(): void;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };

  export default classes;
}
