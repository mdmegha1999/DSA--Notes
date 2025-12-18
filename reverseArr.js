let fruits = ["apple", "banana", "cherry", "mango", "orange"];

// Using Inbuilt Methods - O(n) Time and O(1) Space

console.log(fruits.reverse()) // output: [ 'orange', 'mango', 'cherry', 'banana', 'apple' ]
// Time complexity: O(n)
// Space complexity: O(1)
function reverseArr(fruits) {
    fruits.reverse();
}
console.log(fruits.join(" ")); // output: orange, mango, cherry, banana, apple
console.log(fruits);


// By Swapping Elements - O(n) Time and O(1) Space

/*The idea is to iterate over the first half of the array and swap each element 
with its corresponding element from the end. So, while
 iterating over the first half, any element at index i is swapped with
  the element at index (n - i - 1).*/


function reverseArray(fruits){
    let n = fruits.length;
    for(let i=0; i< n/2; i++){
        
    }
}