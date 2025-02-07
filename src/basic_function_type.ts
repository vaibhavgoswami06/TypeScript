// Let's understand how basic function definiton and declaration work in typescript

// function 1
// function sayHello() {
//   console.log("hii");
// }
// sayHello();
// in above function, I haven't passed any parameter, nor did I returned any thing, it's a simple function which do something

// function 2
// function add(num1: number, num2: number, num3?: number): number | Error {
//   if (num3) return num1 + num2 + num3;
// if there is num3 then return sum with it included
//   return num1 + num2;
// then return number with just sum of num1 and num2 addition
// }
// console.log(add(2, 3));
// okay above function takes three parameter, one is optional so we used optional parameter method  for it, but starting two is needed, and defined the type of all the
// parameters, then defined the return type of the function, that is could be error or a number

// function 3
// function add1(num1: number, num2: number, num3: number = 3): number | Error {
//   return num1 + num2 + num3;
// }
// console.log(add1(2, 3));
// here num3 is a default parameter

// function 4 : function inside a function

function callFunc(
  func: (f: string, l: string, m?: string) => string,
  param1: string,
  param2: string
): string {
  return func(param1, param2);
}

function makeName(f: string, l: string, m?: string) {
  if (m) return `${f} ${m} ${l}`;
  return `${f} ${l}`;
}

console.log(callFunc(makeName, "vaibhav", "goswami"));
