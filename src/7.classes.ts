export interface Movie {
  title: string;
  play(): void;
}

class Film implements Movie {
  title: string = "";
  duration: number = 120;

  play(): void {}
}

// new Film("It").play();

abstract class Node {
  abstract x: number;
  abstract y: number;

  abstract calculateSize(): number;

  draw(): void {
    const size = this.calculateSize();
  }
}

class FactoryNode extends Node {
  x: number = 0;
  y: number = 0;

  calculateSize(): number {
    return 123;
  }
}

new FactoryNode().draw();
