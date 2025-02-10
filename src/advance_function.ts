// rest parameters : what if we wanted to give as many as parameters we wanted
// function add(...number: number[]) {
//   console.log(number);
// }
// add(12, 34, 35, 35, 23, 34);
// add();
// add(35, 23, 34);

// function overloading: an overloaded function has different call signatures and has different types

// function greet(hname: string, wname: string): string;
// function greet(hnames: string[], wnames: string[]): string;
// function greet(hnameOrNames: unknown, wnameOrNames: unknown): string {
//   if (typeof hnameOrNames == "string" && typeof wnameOrNames == "string") {
//     console.log(`Hello Mr.${hnameOrNames} and Mrs.${wnameOrNames}`);
//     return "done";
//   } else if (Array.isArray(hnameOrNames) && Array.isArray(wnameOrNames)) {
//     for (let i = 0; i < hnameOrNames.length; i++) {
//       if (wnameOrNames[i]) {
//         console.log(`Hello Mr.${hnameOrNames[i]} and Mrs.${wnameOrNames[i]}`);
//       } else {
//         console.error("Wives doesn't exist anymore");
//       }
//     }
//     return "done";
//   } else {
//     console.log("Hmm, something needs to be pointed out");
//     return "undone";
//   }
// }

// greet(["mohit", "mukesh", "rakesh", "raju"], ["ragini", "barfi", "shetvani"]);

// Something else, don't see
// function greet(name?: string, arr?: string[]) {
//   if (name) {
//     console.log("Hello Mr.", name);
//   } else if (Array.isArray(arr)) {
//     arr.forEach((e) => console.log(`Hello Mr.${e}`));
//   } else {
//     console.log("kuch to gadbad hai baba");
//   }
// }

// greet(undefined, ["dsf", "sdf", "sdfs"]);
