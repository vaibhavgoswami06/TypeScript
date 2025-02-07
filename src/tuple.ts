// tuples are fixed sized array, with fixed types too

// const blabla: Array<number | string> = [
//   "hello world",
//   2134,
//   23423,
//   "lkjsdklfjs",
// ];
// const coord_nates: [number, number] = [1234, 4243];

// returns type object because the code is transpiled into js, and in js arrays and tuples are perceived as objects
// console.log(typeof coord_nates);

// will return true, because coord_nates are array type
// console.log(Array.isArray(coord_nates));

// ** typescript has arrays and tuples but tuple doesn't exist in js
// ** in JavaScript, typeof returns "object" for any object, including arrays, tuples, and objects like {}
// ** TypeScript adds type annotations and checks at compile time, but these types are erased when the code is transpiled to JavaScript. At runtime, JavaScript doesn't know about TypeScript's tuple types, so typeof can't distinguish between a tuple and a regular array.

// * nested tuples

const data: [string, number[]][] = [
  ["rakesh", [13, 34, 53]],
  ["suresh", [54, 66, 76]],
  ["manjulika", [533, 999]],
  ["kambal", [999]],
];
// this data shows the names and their workout pr in kgs.
// what we are doing above is that, we are creating a tuple, in which first value would be "string" and another one should be a array  of number, [string, number[]], and this tuple would be stored inside a array of this tuple "[]".

data.forEach((element) => {
  console.log(`Name: ${element[0]}, lifted: ${element[1]}`);
});
