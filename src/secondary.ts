// * array
// collection of data stored in contiguous memory location

let arr = [1, 2, 3, 4, 5, 5, "hello world"]; // by default javascript stores any type of data in array
// let addition = arr[0] + 5; , this won't work as array is type of number and string and adding it with number won't work

let arr2: string[] = ["a", "b", "c", "d", "e"]; // defining a string type array
let result = arr2[0] + "b"; // will work as array is type of string so do second value

//* nested array
let arr3: number[][] = [
  [2, 3, 4],
  [2, 4, 5],
  [34, 353],
];
console.log(arr3[0][1]);
