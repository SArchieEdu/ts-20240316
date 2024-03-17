import "reflect-metadata";

class PerformanceService {
  @LogTime()
  calculate() {
    return 12 * 15 - 45;
  }

  @LogTime()
  sum(a: number, b: number) {
    return a + b;
  }
}

console.log("result:", new PerformanceService().calculate());

function LogTime() {
  return (
    target: Object,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) => {
    const method = descriptor.value;
    descriptor.value = function (...args: unknown[]) {
      console.time(propertyName);
      const result = method.apply(this, args);
      console.timeEnd(propertyName);

      return result;
    };
  };
}

interface InjectableMetaData {
  provideIn: "root" | string;
}

@Injectable({
  provideIn: "root",
})
class UserService {}

type Constructor<Args = unknown> = new (...args: Args[]) => {};

function Injectable(metadata: InjectableMetaData) {
  return function (Cnstr: Constructor) {
    Reflect.defineMetadata("Injectable", metadata, Cnstr);
  };
}

function getInstance(cstr: Constructor) {
  const metadata: unknown = Reflect.getMetadata("Injectable", cstr);
}

interface CheckerMetadata {
  from: number;
  to: number;
}

class Film {
  @Checker({ from: 60, to: 180 })
  duration: number = 120;
}

function Checker(metadata: CheckerMetadata) {
  return function (object: Object, propertyName: string) {
    Reflect.defineMetadata(
      `Checker_${propertyName}`,
      metadata,
      object.constructor
    );
  };
}

const film = new Film();

function validator(film: Film) {
  return Object.getOwnPropertyNames(film).every((propertyName) => {
    const propertyMetadata: unknown = Reflect.getMetadata(
      `Checker_${propertyName}`,
      film.constructor
    );

    return true;
  });
}
