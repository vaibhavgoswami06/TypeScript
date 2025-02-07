// optional chaining (?), helps us to use the value if it exists, without worrying of typescrip error. let's see with an exmaple

// type personData = Array<{ name?: string; address?: string }>;
// const personInfo: personData = [{ name: "rakesh" }, { address: "blabla" }];

// const arr4: Array<{ name?: string }> = [
//   { name: "ramu" },
//   { name: "joe" },
//   { name: undefined },
// ];

// const el = arr4.pop()?.name;
// in above code we are poping one element of the arr4 array, but it retur's that is might be undefined, we use ?. to say that if the name property exists then return if it doesn't then without error we will just get undefined
// console.log(el);
// output will be : undefined

// (!) bang operator: it tells the compiler to remove possibility of on property to be undefined

// const arr4 = [[{ name: undefined }]];
// const el = arr4.pop()!.pop()!.name;
// console.log(el);

// (?) : is checking and moving forward
// (!) : is moving forward no matter what
