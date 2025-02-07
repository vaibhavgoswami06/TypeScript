// Literals:
// => literals are instance of a primitive type of data
/* 
for eg:
23 : number literal
'hello': string literal
true : boolean literal
*/

// 1.
let direction: "north" | "south" | "east" | "west";
// here the direction variable can only have one of above 4 value, so it's type of these above 4 string literal
direction = "south";

// 2.
let responseCode: 404 | 500 | 201 | 200;
// the type of above variable are these number literals
responseCode = 500;
if (responseCode === 500) {
  console.log("server error");
} else if (responseCode === 404) {
  console.log("user error");
} else if (responseCode === 201 || 200) {
  console.log("response okay");
}

// 3. can only be on literal tooo
let isCorrect: true;
isCorrect = true; // can't be assigned false

// Enums:
// => imagine you have a set of sizes of clothes, 0, 1, 2, 3, what you can do is link each number with a string in an enum, and whenever you will use that string
// in the program you would be using that number
// enum let me integrate integers in string representation

//Eg:
// 1.
enum Size {
  small = 19,
  medium = 23,
  large = 34,
}

let size: Size = Size.small;
// size variable is type of Size enum, and the small size is being used
console.log(size); // it will have value 19, by defualt 0

let rupaMedium: Size = Size.medium;

if (rupaMedium === Size.medium) {
  console.log("it's a medium sized chaddi!");
} else if (rupaMedium === Size.small) {
  console.log("Areee! naam to medium hai");
} else {
  console.log("ho gya kalyan!");
}

// string enum
enum Direction {
  north = "NORTH",
  south = "SOUTH",
  east = "EAST",
  west = "WEST",
}

let South: Direction = Direction.south;
console.log(South); // it's a string enum with value south, which is a string
