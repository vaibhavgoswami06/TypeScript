// ** ANY type
/* any is a type in typescript, which basically means the variable could be of any type, you just don't know what type.
    try to use any as less as possible, only use it when the datatype is really hard to guess.
*/

// let x1: any = true;
// console.log(x1.length);
// using length function won't be in use, and seems unethical, that's why don't use any normally.
// The result will be "undefined"

// ** Type UNKNOWN
/* unknown type is used as a counter part of any, what is does is, it let's you declare the variable as any, but before applyting and operation on that variable
it, gives you error to simple declare type explicitly, before operation. 
Let's see an example
*/

function generateRandomNumber(min: number, max: number): number {
  min = Math.ceil(min);
  // ceil function return a biggest integer value in relation to decimal, eg: 6.3 = 7
  max = Math.floor(max);
  // floor function return a smallest integer value in relation to decimal, eg: 6.3 = 6
  return Math.floor(Math.random() * (max - min + 1)) + min;
  // this function uses some logic, that is your part to understand
}
// This above function is generating a random number between given range of numbers

let choice: number = generateRandomNumber(1, 4);
// choice variable will store a random integer number between 1 to 4
console.log(choice);
// logging the choice

let x2: unknown = 3;
// storing our chosen value in the variable, hippocracy haha.

switch (choice) {
  case 1:
    if (typeof x2 == "number") {
      console.log(
        `Value is: ${x2}, and arithmetic operation is + 1: ${x2 + 1}`
      );
    } else {
      console.log("Try again");
    }
    // we are telling the comiler that we are checking the value of x2, before applying any operation on it.
    break;

  case 2:
    if (typeof x2 == "string") {
      console.log(x2.length);
    } else {
      console.log("Try again");
    }
    break;

  case 3:
    if (typeof x2 == "boolean") {
      console.log(`it's ${x2}`);
    } else {
      console.log("Try again");
    }
    break;
  case 4:
    if (typeof x2 == "object") {
      console.log("it's an js object type, maybe array or tuple", x2);
    } else {
      console.log("Try again");
    }
    break;
  default:
    console.log("program ke login me gadabadi babu bhaiya");
}
// above I have defined a switch case, which operates on choice variable value, if value is 1: I am guessing x2 is number, and keep doing it till 4..., Baaki tum //samajhlo

// ** Type cast
// const result1 = (x2 as number) + 1;
// const result2 = (x2 as number[])[0] + 1;
// casting x2 as 0rth value in an array

// I am telling compiler that treat our unknown value as a number then perform operation, this is type casting
// be sensetive while using it, as this could lead to crash in runtime

// Example of using any

// function processingRequest(input: any): void {
//   // performing operationg without typechecking, then we can use any
//   console.log(`Backend gave: ${input}`);
// }

// // backend giving data, could be name, array of name, or nested array of name
// processingRequest("ramu");
// processingRequest(["ramu", "mukesh", "raju"]);
// processingRequest([
//   ["ramu", "rajni"],
//   ["rajesh", "kajukatli"],
//   ["gulab jamun", "barfi"],
// ]);

// example of using unknown
function processingRequest(input: unknown): void {
  // taking input as unknown
  if (typeof input == "string") {
    // if type of string then simply present name
    console.log(`Name of employee: ${input}`);
  } else if (Array.isArray(input)) {
    // check if is array
    if (input.every((item) => typeof item == "string")) {
      // check if is a simple array, if yes then execute if's code block
      console.log("Processing array of strings");
      input.forEach((item) => console.log(`Name of employee is: ${item}`));
    } else if (
      input.every(
        (item) =>
          Array.isArray(item) &&
          item.every((subitem) => typeof subitem == "string")
      )
    ) {
      // check if a array of array, and if innermost array has all value strings, if then then execute current block of code
      console.log("Processing array of array of strings");
      input.forEach((e) =>
        console.log(`Employee name: ${e[0]}, and his wife: ${e[1]}`)
      );
    } else {
      // if none matched above, wrong array type
      console.log("Wrong  array type");
    }
  } else if (input instanceof Blob) {
    console.log("It's a file");
  } else if (input instanceof Error) {
    console.log(`It's and error with message ${input.message}`);
  } else {
    // if type id different then show this error
    console.log("Wrong format of data");
  }
}
// Above function has type of input unknown, I have passed and array of array, innermost array contains name of husband and wife, how will I parse it, I have shown in above function

// check 1
// processingRequest([
//   ["ramu", "rajni"],
//   ["rajesh", "kajukatli"],
//   ["gulab jamun", "barfi"],
// ]);
// passing an array of array type to function's input

// check 2
// processingRequest(["ramu", "ramesh", "raju"]);

// check 3
// processingRequest("raju");

// check 4
// processingRequest(false);

// check 5
// processingRequest(new Blob());

// check 6
// processingRequest(new Error("blabla"));
