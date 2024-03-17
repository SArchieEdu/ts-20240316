export type Constructor<Args = unknown> = new (...args: Args[]) => {};

class Animal {
  feed() {}
}

class Horse extends Animal {}
class Tiger extends Animal {}
class Lion extends Animal {}
class Car {}

function MovableFactory<BaseConstructor extends Constructor<any>>(
  Base: BaseConstructor
) {
  return class Movable extends Base {
    move() {}
  };
}

const MovableHorse = MovableFactory(Horse);
const MovableTiger = MovableFactory(Tiger);
const MovableLion = MovableFactory(Lion);
const MovableCar = MovableFactory(Car);

new MovableHorse().move();
