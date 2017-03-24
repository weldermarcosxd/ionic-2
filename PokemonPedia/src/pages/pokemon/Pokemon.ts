export interface Pokemon {
  _id: Number;
  name: String;
  attack: Number;
  defense: Number;
  height: Number;
  speed: Number;
  types?: String;
  img: URL;
  last_change: Date;
}
