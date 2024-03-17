// mixins

export class Animal {
  feed() {}
}

class Movable {
  move() {}
}

class Horse {}
interface Horse extends Animal, Movable {}

type Constructor<Args = unknown> = new (...args: Args[]) => {};

function applyMixins(childClass: Constructor, parentClasses: Constructor[]) {
  parentClasses.forEach((parent) => {
    Object.getOwnPropertyNames(parent.prototype).forEach((property) => {
      childClass.prototype[property] = parent.prototype[property];
    });
  });
}

applyMixins(Horse, [Animal, Movable]);
const horse = new Horse();
horse.feed();
horse.move();
