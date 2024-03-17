export {};

declare global {
  interface Window {
    loader: {
      loadData: () => {};
    };
  }

  var ENV: "production" | "testing";
}
