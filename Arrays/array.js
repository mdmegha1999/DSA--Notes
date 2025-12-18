let arr = ["apple", "banana", "cherry", "mango", "orange"];
console.log(arr[4]) //Accessing Elements of an Array

let fst = arr[0];
console.log(fst) //Accessing the First Element of an Array
console.log("First Item: ", fst);

let last = arr[arr.length - 1]; //Accessing the Last Element of an Array
console.log("Last Item: ", last);

arr[1] = "blueberry"; //Modifying Elements of an Array
console.log(arr);

arr.push("grape"); //Adding Elements to an Array
console.log(arr);

arr.unshift("kiwi"); //Adding Elements to the Beginning of an Array
console.log(arr);

let a = arr.pop();//Removes and returns the last element
console.log(arr);
console.log("Popped Item: ", a);

let b = arr.shift(); //Removes and returns the first element
console.log(arr);
console.log("Shifted Item: ", arr);

arr.splice(1,2);
console.log("After Removing 2 elements starting from index 1: " + arr);



let fruits = ["apple", "banana", "cherry", "mango", "orange"];
// fruits.splice(2,2)
// console.log(fruits)

// let length = fruits.length;
// console.log("Array length:" +length)
// fruits.length = 10;
// console.log("after increasing length:" , fruits) //output: [ 'apple', 'banana', 'cherry', 'mango', 'orange', <5 empty items> ]
// console.log("after increasing length:" + fruits) //output: after increasing length:apple,banana,cherry,mango,orange,,,,


// fruits.length = 3;
// console.log("after decreasing length:" , fruits) //output: [ 'apple', 'banana', 'cherry' ]
// console.log("after decreasing length:" + fruits) //output: after decreasing length:apple,banana,cherry


// console.log(fruits.toString()) //output: apple,banana,cherry
// console.log(typeof fruits);// output: object
// console.log(fruits.join(" - ")) //output: apple - banana - cherry
// console.log(fruits.indexOf("mango")) // output: 3
// console.log(fruits.lastIndexOf("mango")) // output: 5
// console.log(fruits.includes("mango")) // output: true
// console.log(fruits.slice(1,4)) // output: [ 'banana', 'cherry', 'mango' ]
// console.log(fruits.slice(2)) // output: [ 'cherry', 'mango', 'orange' ]
// console.log(fruits.reverse()) // output: [ 'orange', 'mango', 'cherry', 'banana', 'apple' ]
// console.log(fruits.sort()) // output: [ 'apple', 'banana', 'cherry', 'mango', 'orange' ]


console.log(Object.keys(fruits));


let colors = ["red", "green", "blue"];
// console.log(colors.toReversed());
let en = colors.entries();//Array.prototype.entries()
//The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.
console.log(en.next().value); // output: [ 0, 'red' ]
console.log(en.next().value); // output: [ 0, 'red' ]
