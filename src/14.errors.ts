try {
  throw {};
  throw undefined;
  throw null;
  // throw window
} catch (error: unknown) {
  console.error(getErrorMessage(error));
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  //...;
}

window.loader.loadData();
