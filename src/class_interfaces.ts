// abstract : we define it, we write it out, we declare it's existence, we don't implement all of the functionality

interface Animal {
  speak(): void;
}
// interface Animal is abstract

class Cat implements Animal {
  name: string;
  type: string;
  constructor(n: string, t: string) {
    this.name = n;
    this.type = t;
  }
  speak() {
    console.log(
      `I am a Cat, My name is ${this.name} and I am type of ${this.type}`
    );
    console.log("Says Meaw");
    this.complexFunction();
  }
  complexFunction() {
    console.log("Works");
    return 0;
  }
}
// we have created a class of Type animal, ofc, but we have one more function ohkay, known as complex function, it's basically will do something comple

const cat1: Animal = new Cat("brownie", "american");
/* we have created an object of class Cat, and it's type is animal, now what is happening here, that we can only access the functionality of Class Cat, that is listed
 as abstract in Type Animal. in simple we can access speak method but not complexFunction. The complexFunction would still be working but can't be accessed from outside means user. */

cat1.speak();

// static keyword : non-access modifier used for methods and attributes
// in simple: variable and methods that are associated with the class rather than with each instance of the class
