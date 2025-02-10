// interfaces : programming structure, that allows the computer to enforce certain properties on an object(class)
// I can give an object and specific type with interface, let's a an object with name, age is type of person interface.

// object 1
// interface person {
//   name: string;
//   age: number;
//   address?: {
//     city?: string;
//     state?: string;
//     country: string;
//   };
// }
/* above I have declared the type for a object, it's just like a class, but just known as type, to create a new object like above person type, 
I would just need to give type and the properties listed in types, also if I want and property to be optional, I can make that by ?: operator.
*/
// const raju: person = {
//   name: "raju",
//   age: 34,
//   address: {
//     country: "India",
//   },
// };

// object 2
// interface Person1 {
//   name: string;
//   age: number;
//   greet: () => void;
// }
// greet is a method of the class Person1, it return void means nothing

// let aryan: Person1 = {
//   name: "Aryan",
//   age: 33,
//   greet() {
//     console.log(`Hello ${this.name}`);
//   },
// };

// aryan.greet();

// object 3

interface Person3 {
  name: string;
  age: number;
}
// created a interface Person3

interface Employee {
  employeeId: number;
  employeeMail: string;
}
// extended interface Person3 with new interface name Employee and added new properties, just like inheritence in oops

interface Manager extends Employee, Person3 {
  Manages: Person3[];
}

const p1: Person3 = {
  name: "neil",
  age: 23,
};

const p2: Person3 = {
  name: "nitin",
  age: 33,
};
const p3: Person3 = {
  name: "mukesh",
  age: 24,
};
const mgr1: Manager = {
  name: "boss",
  age: 43,
  employeeId: 3432,
  employeeMail: "blabal@email.com",
  Manages: [p1, p2, p3],
};

const emp1: Employee = {
  employeeId: 343434,
  employeeMail: "blabla@email.com",
};

mgr1.Manages.forEach((e) => console.log(e));
