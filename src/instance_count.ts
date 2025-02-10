class Person {
  name: string;
  // it's a instance variable, or object variable
  static instanceCount: number = 0;
  // it's a static variable

  constructor(n: string) {
    this.name = n;
    Person.instanceCount++;
  }

  getName() {
    console.log(`Name is ${this.name}`);
  }

  static decreaseCount() {
    this.instanceCount--;
  }
  // static method can only use associated static variable and methods with class
}

const person1 = new Person("rakesh"); // 1
const person2 = new Person("mukesh"); // 2
const person3 = new Person("rajesh"); // 3
console.log(Person.instanceCount);
Person.decreaseCount();
console.log(Person.instanceCount);

// instaneCount is a instance variable which changes according to class, not according to instance of that class means objects
