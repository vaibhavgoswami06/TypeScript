// tuples are fixed sized array, with fixed types too

const blabla: Array<number | string> = [
  "hello world",
  2134,
  23423,
  "lkjsdklfjs",
];
const coord_nates: [number, number] = [1234, 4243];

// returns type object because the code is transpiled into js, and in js arrays and tuples are perceived as objects
console.log(typeof coord_nates);

// will return true, because coord_nates are array type
console.log(Array.isArray(coord_nates));

// ** typescript has arrays and tuples but tuple doesn't exist in js
// ** in JavaScript, typeof returns "object" for any object, including arrays, tuples, and objects like {}
// ** TypeScript adds type annotations and checks at compile time, but these types are erased when the code is transpiled to JavaScript. At runtime, JavaScript doesn't know about TypeScript's tuple types, so typeof can't distinguish between a tuple and a regular array.
