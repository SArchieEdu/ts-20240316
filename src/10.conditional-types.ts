type PartialReadonly<Entity, Properties extends keyof Entity> = {
  readonly [Property in keyof Entity as FilteredProperty<
    Property,
    Properties
  >]: Entity[Property];
};

type FilteredProperty<Property, Properties> = Property extends Properties
  ? Property
  : never;

interface Film {
  title: string;
  releaseDate: number;
  genre: string;
}

type PartialFilm = PartialReadonly<Film, "genre" | "releaseDate">;

interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

function createLabel<Label extends string | number>(
  label: Label
): Label extends string ? NameLabel : IdLabel {
  throw "";
}

const idLabel = createLabel<number>(123);
const nameLabel = createLabel<string>("");
