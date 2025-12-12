// # 9. Iterating Through Array Elements
let arr = ["apple", "banana", "cherry", "mango", "orange"];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//     // output:
//     // apple
//     // banana
//     // cherry
//     // mango
//     // orange
//     console.log(i)// output: 0 1 2 3 4
//     console.log(arr.length);// output: 5
// }
// accessing elements of array


for (let i = 0; i > arr.length; i++){
    console.log(arr[i]);
}
// no of elements in array
// for (let i = 1; i < arr.length; i--){
//     console.log(arr[i]);
// }
// output:
// banana
// apple
//undefined.........


arr.forEach(function myfunc(x){
    console.log(x);
})

// 10. Array Concatenation

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let concateArray = array1.concat(array2);
console.log('concatenated array is', concateArray);

//---- array concatenation using function ----
// var getConcatenation = function(nums) {
//     let n = nums.length;
//     let ans = new Array(n * 2);

//     for (let i = 0; i < n; i++) {
//         ans[i] = nums[i];
//         ans[i + n] = nums[i];
//     }

//     return ans;
// };

// output: concatenated array is [ 1, 2, 3, 4, 5, 6 ]

let colors = ["red", "green", "blue"];
// colors.forEach((item, index) => {
//   console.log(`${index}: ${item}`);
// });
console.log(colors.toReversed());



// ---Shuffle array ---
// {a1, a2, .. an, b1, b2, .. bn} as {a1, b1, a2, b2, a3, b3, ……, an, bn} without using extra space

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let shuffledArray = [];

for(let i = 0; i< num.length/2; i++){

    shuffledArray.push(num[i]);
    shuffledArray.push(num[i + num.length/2]);

}
    console.log(shuffledArray);


// ---Shuffle array using function ---
var shuffle = function(nums, n) {
    let ans = [];
    for (let i=0; i<n; i++){
        ans.push(nums[i]);
        ans.push(nums[i+n]);
    }
    return ans;
    
};



// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// var numIdenticalPairs = function(nums) {
//     let indexedpairs = 0;
//     for(let i = 0; i< nums.length; i++){
//         for(let j =i+1; j < nums.length; j++){
//             if(nums[i] === nums[j]){
//                 indexedpairs++;
//             }
//         }
//     }
//     return indexedpairs;

// };



arr = [1, 4, 3, -5, -4, 8, 6]
let min = arr[0];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }

console.log(min, max);
}