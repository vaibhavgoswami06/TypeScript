// public class member : can be accessed from anywhere
// private class member : can be accesse from only it's own class
// protected class member: can be accessed from it's own class and the subclass too

// class Animal {
//   private type: string;
//   // I have declared this type variable, and enclosed it in a private access modifier, what's happening is that I cannot access this out of this class definition
//   constructor(type: string) {
//     this.type = type;
//   }

//   info() {
//     console.log(`This is a ${this.type}`);
//   }
//   // getter method below
//   getType() {
//     return this.type;
//   }

//   // setter method below
//   setType(args: string) {
//     this.type = args;
//   }
// }
// I can change the private class variable from inside the class ofcourse

// const a1 = new Animal("dog");
// a1.info();
// a1.setType("cat");
// a1.info();

// class 2 : using public

// class Person {
//   public name: string;
//   private age: number;
//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
//   getData() {
//     console.log(`Name: ${this.name} and age: ${this.age}`);
//   }
//   setData(a: number) {
//     this.age = a;
//   }
// }

// const j1 = new Person("mahesh", 34);
// j1.getData();
// console.log(j1.name);
// changing name outside
// j1.name = "rakesh";
// changing age with setterfunction
// j1.setData(44);
// j1.getData();

// console.log(j1.age); age can't be accessed as that is private type

// class 3: using protected

// class Breed {
//   protected type: string;
//   // defining protected variable
//   constructor(n: string) {
//     this.type = n;
//   }
// }

// class Cat extends Breed {
//   private name: string;
//   constructor(n: string, t: string) {
//     super(t);
//     this.name = n;
//   }
//   getInfo() {
//     console.log(`Name of cat is: ${this.name} and breed is: ${this.type}`);
// using protected variable, in derived class
//   }
// }

// const c1 = new Cat("shaaumi", "persian");
// c1.getInfo();

// class Doggo extends Animal {
//   name: string;
//   constructor(t: string, n: string) {
//     super(t);
//     this.name = n;
//   }
//   info() {
//     console.log(`Animal type is ${this.getType()}, name is: ${this.name}`);
//   }
// }

// const d1 = new Doggo("dog", "chuddy");
// d1.info();

// abstract class: Restricted class that cannot be used to create objects, and designed to be used as a base class
// In an abstract class, any abstract method defined should be implemented by the base class

// abstract class Animal {
//   abstract makeSound(duration: number): void;
//   // defined an abstract method, should be used by all it's childrens
//   move(duration: number) {
//     this.makeSound(duration);
//   }
//   // the above method is statically typed, if you run it then it assumer makeSound has been defined and calls it directly
// }

// class Dog extends Animal {
//   makeSound(duration: number): void {
//     while (duration >= 0) {
//       console.log("Woof Woof");
//       duration--;
//     }
//   }
// }
// above we have defined a class Dog, which defines make sound according to how dog speak, also uses duration param

// class Cat extends Animal {
//   makeSound(duration: number): void {
//     while (duration >= 0) {
//       console.log("Meaw Meaw");
//       duration--;
//     }
//   }
//   move(): void {
//     console.log("hey");
//   }
// }
// above we have defined a class Cat, which defines make sound according to how cat speak, also uses duration param, and also creates it's own move method

// const dog = new Dog();
// creating an instance of class Dog
// dog.makeSound(10);
// using the dog class method makesound
// dog.move(10);
// using the feature of base class animal
// both makeSound and move function is gonna have same output.

// const cat = new Cat();
// instanciation classs Cat
// cat.move();
// using cat class own feature move

// In summary I can say is that, the class cat, and dog should have makesound method no matter what, but having move is not necessary for them

/* any abstract method is also get utilized by the concrete method of that class */
