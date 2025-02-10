// TypeGaurd : these are a way of checking the type of a value at runtime and narrowing its type in a conditional block
// typegaurd can be impleted with : typeof, instanceof, is, in
type stringOrNumber = string | number;

function addValue(data: stringOrNumber): void {
  if (typeof data == "string") {
    // typgaurding
    console.log("Adding three");
    console.log(data + " three");
  } else if (typeof data == "number") {
    console.log("Adding three");
    console.log(data + 3);
  } else {
    console.log("Kuch nhi ho sakta tumhara!");
  }
}

addValue("two");

class Dog {
  firstname: string;
  lastname: string;
  constructor(fn: string, ln: string) {
    this.firstname = fn;
    this.lastname = ln;
  }
}

class Cat1 {
  firstname: string;
  constructor(fn: string) {
    this.firstname = fn;
  }
}

function idDog(pet: Dog | Cat1): pet is Dog {
  return (pet as Dog).lastname !== undefined;
}

function idCat(pet: Dog | Cat1): pet is Cat1 {
  return (pet as Dog).firstname !== undefined;
}
function checkAnimal(animal: Cat1 | Dog) {
  if (idDog(animal)) {
    console.log(`It's a Dog, Name is ${animal.firstname} ${animal.lastname}`);
  } else if (idCat(animal)) {
    console.log(`It's a Cat, Name is ${animal.firstname} `);
  }
}

// if ("lastname" in animal) {
//     console.log("It's a dog");
//   } else if (animal instanceof Cat) {
//     console.log(`It's a cat`);
//   } else {
//     console.log(`It's nothing`);
//   }

const dog1 = new Dog("talwandi", "sabo");
const catOne = new Cat1("brownie");
checkAnimal(dog1);
checkAnimal(catOne);
