// utility types: these are built-in types that enable you to transform and manipulate existing types in various ways.

// partial : it make all the properties of the types being used, optional!

// **********************************************
// interface personsData {
//   husband: string;
//   wife: string;
//   kid: string;
// }

// function getHusbandName(data: Partial<personsData>) {
//   console.log(`Name of husband is:${data.husband}`);
// }

// function getwifeName(data: Partial<personsData>) {
//   console.log(`Name of wife is:${data.wife}`);
// }

// function getkidName(data: Partial<personsData>) {
//   console.log(`Name of kid is:${data.kid}`);
// }
// **********************************************

// readonly: it is udes to creaete a new type where all properties are readonly, meaning they cannot be modifie once assigned a value

// **********************************************
// interface name {
//   name: string;
// }

// const n1: Readonly<name> = { name: "raju" };
// const n2: name = { name: "rajesh" };

// console.log((n1.name = "rakesh")); // this code block is invalid as type is readonly, so properties can't be changed
// console.log((n2.name = "raju")); // allowed
// **********************************************

// Record : it helps define a type with property names such as id and map the values to the type of data, like we can add a key to that type

// **********************************************
interface singer {
  name: string;
}
// <string(key),singer(value)>
const singerData: Record<string, singer> = {
  ajaMahiAja: { name: "pta nhi" },
  roadhouse: { name: "pta nhi1" },
};

const singerData2: Record<number, singer> = {
  0: { name: "pta nhi" },
  1: { name: "sonu nighar" },
  2: { name: "sweta gangule" },
  3: { name: "ronak chadda" },
  4: { name: "adhe nashe" },
};

console.log(singerData.ajaMahiAja);
// **********************************************
