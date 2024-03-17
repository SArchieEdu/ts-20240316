export interface Response<Result, Code extends string | number = number> {
  result: Result;
  code: Code;
}

interface Film {
  title: string;
  duration?: number;
  releaseYear?: number;
}

interface TvSeries {
  title: string;
  seasonCount: number;
}

// type FilmResponse = Response<Film>;
// type FilmResponse = {
//   code: number;
//   result: Film;
// }

type TvSeriesResponse = Response<TvSeries>;
// type TvSeriesResponse = {
//   code: number;
//   result: TvSeries;
// }

// interface FilmResponse extends Response {
//   result: Film;
// }

// interface TvSeriesResponse extends Response {
//   result: TvSeries;
// }

function getFilm(): Response<Film, number> {
  return fetch<{ title: string; releaseYear: number }, Film>(undefined);
}

function getTvSeries(): Response<Film, number> {
  return fetch<{ title: string; releaseCountry: string }, Film>({
    title: "",
    releaseCountry: "",
  });
}

type Response2<Result, Code extends string | number = number> = {
  result: Result;
  code: Code;
};

function fetch<Params, Result>(
  params: Params | undefined
): Response<Result, number> {
  let result: Result;
  throw "";
}

class MyClass<Result> {
  result: Result;

  constructor(value: Result) {
    this.result = value;
  }

  getResult(): Result {
    return this.result;
  }
}

const instance = new MyClass<number>(123);

let result: MyClass<string> = {
  result: "",
  getResult() {
    return "";
  },
};

instance instanceof MyClass === true;
result instanceof MyClass === false;

type PartialFilm = Partial<Film>;
type RequiredFilm = Required<Film>;
type ReadonlyFilm = Readonly<Film>;
type CustomFilm = Pick<Film, "title" | "releaseYear">;
type CustomFilm2 = Omit<Film, "title" | "releaseYear">;
type Genre = "horror" | "comedy" | "drama" | "fantasy";
const genreMap: Record<Genre, string> = {
  horror: "ужасы",
  comedy: "комедия",
  drama: "драма",
  fantasy: "фэнтези",
};

function generateSelection(genre: Genre): Film[] {
  return [];
}

generateSelection("drama");

type MyArray = ["horror" | "comedy" | "drama" | "fantasy"];

type ForeignGenre = "anime" | "comedy";

type Genre18 = Exclude<Genre, "drama" | "fantasy">;
type Genre182 = Extract<ForeignGenre, Genre18>;
