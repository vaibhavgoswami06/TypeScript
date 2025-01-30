// primitive types
/* 
number
string 
boolean 
null undefine
never
void
*/
// Implicit declaration
//       Use full in primitive types
let y = 1234; // implicit declaration by typescript to type: number
let a = Infinity; // a inifinity type number

/* ========================================================== */
// Explicit declaration

// defining string type variable
let x: string = "Hello World";

// Under numbers : positive, negative, zero, inifinity, negative inifinity and floating point values

let z: number; // declaring a number type variable
let bool: boolean; // declaring a boolean type variable
let str: string; // declaring a string type variable

// null or undefined
// null and undefined variables are not assignable to any types
let noll = null; // variable may doesn't exist or is empty
let nondefined = undefined; // variable has been declared but not defined

// noll = 234;
// noll = "hello world";
// union means could be given types
let noll2: null | number | string = null;
let noll3: null = null;

// * type void
// maybe a function doesn't return a value use void then
function vooid(): void {
  console.log("return type void");
}
function vooid2(): void {
  return console.log("ha ha it returned a print statement");
}

//  * type never
// it means that a function should never return anything
