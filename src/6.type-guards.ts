// type-guards

// 1 typeof

function calculate(a: number, b: number | string): number {
  if (typeof b === "number") {
    return a + b;
  } else {
    return a + Number(b);
  }
}

// 2 проверка на истинность

function presentFilmTitle(film?: { title: string }): string | undefined {
  //   if (!film) {
  //     return "";
  //   }

  return film?.title.toUpperCase();
}

// 3 равенство

export function sum(
  a: number | string,
  b: number | boolean
): number | undefined {
  if (a === b) {
    return a + b;
  }

  return 0;
}

// 4 in

type Film = {
  title: string;
  duration: number;
};

type TvSeries = {
  title: string;
  seasonCount: number;
};

function play(movie: Film | TvSeries) {
  movie.title;

  if ("duration" in movie) {
    movie.duration;
  } else {
    movie.seasonCount;
  }
}

// 5 instanceof

function presentDate(date: Date | string) {
  if (date instanceof Date) {
    date.getHours();
  }
}

// 6 type predicate

function fetch(): unknown {
  return {
    title: "",
    duration: 123,
  };
}

function isFilm(movie: unknown): movie is Film {
  const film = movie as Film;

  return typeof film?.title === "string" && typeof film?.duration === "number";
}

function getFilm() {
  const movie: unknown = fetch();

  if (isFilm(movie)) {
    movie.title;
  }
}

// 7 исключающие объединения

type TvShow = {
  __typename: "TvShow";
  title: string;
  episodeCount: number;
  episodeDuration: number;
};

type Video = {
  __typename: "Video";
  title: string;
  duration: number;
};

function play(movie: TvShow | Video) {
  if (movie.__typename === "TvShow") {
    movie.episodeCount;
  }
}
