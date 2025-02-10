/* Type aliases: allows you to create custom names for complex types, making your code more readable and maintainable, used for non object related types */
// used for defining type of an structure, that isn't an object, can be used for object too
// we cannot implement/ extend the type
type Coordinate = [number, number];

function compareCoords(p1: Coordinate, p2: Coordinate): Coordinate {
  return [p1[0], p2[1]];
}

interface data {
  name: string;
  age: number;
  gender: "Male" | "Female";
}
// inteface being used for object

type DataSet = data[];
// type being used for a non object structure datatype

const Company1: DataSet = [
  {
    name: "vaibhav",
    age: 34,
    gender: "Male",
  },
  {
    name: "blabla",
    age: 34,
    gender: "Male",
  },
  {
    name: "dummy3",
    age: 24,
    gender: "Female",
  },
];
