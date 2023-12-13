function receivesAFunction(thing) {
  return thing();
}

function returnsANamedFunction() {
  return function callBack() {};
}

function returnsAnAnonymousFunction() {
  return function () {};
}
