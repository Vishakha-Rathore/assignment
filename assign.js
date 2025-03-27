// // ASSIGNMENT - 1

// // question 1--Write a program to reverse the elements of an array without using any built-in reverse functions. Your program should iterate through the array and reverse its elements in place (without creating a new array). The output should be the array with its elements in reverse order
// let array = [1, 2, 3, 4, 5];

// let reversedarr=[]
// for (let i = arr.length - 1; i >= 0; i--) {
//     reversedarr.push(arr[i]); 
// }
// console.log(reversedarr);

// // question -- 2-Write a program to take an array of integers as input and calculate the sum of even numbers and the sum of odd numbers separately. Your program should iterate through the array and add the even numbers to one sum and the odd numbers to another sum. Finally, print both sums.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenSum = 0;
// let oddSum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         evenSum += arr[i];  
//     } else {
//         oddSum += arr[i];   
//     }
// }
// let totalSum = evenSum + oddSum;
// console.log("Sum of even arr: " + evenSum);
// console.log("Sum of odd arr: " + oddSum);
// console.log("Total sum (even + odd): " + totalSum);


// // ASSIGNMENT - 2

// // question 1--Write a JavaScript code calculateElectricityBill(units) that takes the number of electricity units consumed as input and calculates the total bill based on the following slab rates:

// function calculateElectricityBill(units) {
//   let billAmount = 0;
//   if (units <= 100) {
//     billAmount = units * 3;
//   } else if (units <= 200) {
//     billAmount = 100 * 3 + (units - 100) * 5;
//   } else if (units <= 300) {
//     billAmount = 100 * 3 + 100 * 5 + (units - 200) * 7;
//   } else {
//     billAmount = 100 * 3 + 100 * 5 + 100 * 7 + (units - 300) * 10;
//   }

//   // Apply 10% surcharge if bill exceeds ₹1000
//   if (billAmount > 1000) {
//     billAmount += billAmount * 0.10; 
//   }

//   return billAmount;
// }

// // Example usage:
// let unitsConsumed = 350;
// let totalBill = calculateElectricityBill(unitsConsumed);
// console.log("Total Electricity Bill: ₹" + totalBill);

// // question 2--The objective of this assignment is to help students understand and analyze the time complexity of different loop structures and nested iterations in C++. Students will calculate the time complexity for different scenarios and provide justifications for their answers.

// //Task 1: Basic Loop Analysis
// //Code:
// for(let i = 0; i < n; i++) {
//     cout << "PhysicsWallah\n";
// }

// //The time complexity is O(n), as the loop runs n times.
// //The step size impacts the number of iterations, but the overall time complexity remains O(n).

// //Task 2: Loop with Increment of 2
// //Code:

// for(let i = 0; i < n; i+=2) {
//     cout << "PhysicsWallah\n";
// }

// //The time complexity is O(n)


// //Task 3: Traversing Two Arrays Separately
// //Code:
// let a[n], b[m];
// for(let i = 0; i < n; i++) {
//     a[i] = i;
// }
// for(let i = 0; i < m; i++) {
//     b[i] = m - i;
// }
//  // the time complexity is o(n+m).

// //Task 4: Nested Loop for Two Arrays
// //Code:


// for(let i = 0; i < n; i++) {
//     for(let j = 0; j < m; j++) {
//         cout << "okay";
//     }
// }
// //The time complexity is O(n*m).


// //Task 5: Logarithmic Complexity
// //Code:
// let c = 0;
// for(let i = 1; i < n; i *= k) {
//     c++;
// }

// // the time complexity is = o(logn)


// //assignment 3 
// // question 1

// //Problem 1: Time Complexity Analysis of Nested Loops
// let c = 0;
// for(let  i = 0; i < n; i++) {
//     for(let j = i+1; j < m; j++) {
//         c++;
//     }
// }
// //Task
// //Determine the time complexity of the given code.

// //Explain how the nested loops contribute to the overall complexity.

// //Consider the best, worst, and average cases.

// // answer -- time complexity= o(n*m)


// //Problem 2: Another Nested Loop Analysis
// let c = 0;
// for( let i = 0; i < n; i++) {
//     for(let j = i+1; j < m; j++) {
//         c++;
//     }
// }
// //Task:
// //Analyze the time complexity and explain if it differs from Problem 1.

// //Provide a detailed breakdown of how many iterations each loop executes.

// // answer-- time complexity= o(n*m)
// //The time complexity of the code in Problem 2 is O(n * m), which is the same as Problem 1.
// //  Both problems have the same complexity because the pattern of iterations in the nested 
// // loops is essentially the same in both cases.

// //Problem 3: Logarithmic Growth Analysis

// let c = 0;
// for(let i = 1; i <= n; i *= k) {
//     c++;
// }
// //Task:
// //Determine the time complexity of the given loop.

// //Explain how the value of i changes in each iteration.

// //Provide an example with actual values for n and k to illustrate the loop behavior.

// // answer-- time complexity =o(logn)

// // let n = 10;
// //let k=2; 
// //then - i will be in each iteration-- [ 1,2,4,8] 

// //Problem 4: Double Nested Loop Complexity
// for(let i = 0; i < n; i++) {
//     for(let j = 0; j < m; j++) {
//         cout << "okay";
//     }
// }
// //Task:
// //Compute the time complexity of the nested loop.

// //Describe how the two loops interact and the number of times "okay" is printed.

// //Discuss how changing the values of n and m affects the execution time.

// // answer -- time complexity =o(n*m)
// //total number of time okay will print == n*m times
// //vale of i and j at execution time 
// //let n= 2;  let m = 6;
// //i  ,     j 
// //0        0,1,2,3,4,5
// //1         0,1,2,3,4,5 that is iteration will happend


// // assignment 4
// que - 1
function getLastElement(arr) {
    return arr[arr.length - 1];
}

let arr=[1,2,3,4,]
let n = 4
 // answer -- last element = 4
 // time complexity --o(1)
 // space complexity--o(1)

 // que - 2
 function findMax(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
} let arr=[1,2,3,4,5]
 //then max element = 5
 // time complexity --o(n)
 // space complexity--o(1)

 // que - 3
 function containsElement(arr, target) {
    for (let num of arr) {
        if (num === target) return true;
    }
    return false;
} 
// time complexity --o(n)
// space complexity--o(1)

// que - 4
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
// time complexity --o(logn)
// space complexity--o(1)

// que - 5
function findPairs(arr, target) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}
let arr=[1, 2, 3, 4, 5] 
then output should be--
// Output: [[1, 4], [2, 3]]

// time complexity --o(n*n)
// space complexity--o(1)

// que - 6
function findTriplets(arr, target) {
    let triplets = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === target) {
                    triplets.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }
    return triplets;
  let arr=  [1, 2, 3, 4, 5, 6, 7, 8]
  let target=10; then
// Output: [[1, 2, 7], [1, 3, 6], [1, 4, 5], [2, 3, 5]]

// time complexity --o(n*n*n)
// space complexity--o(1)

// que - 7
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
let n = 10 then output
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// time complexity=o(n)
// space complexity=o(n)

//que -8
function countOccurrences(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
} 
let arr=
[1, 2, 3, 2, 2, 4, 5], 
then output [2,3]
// time complexity --o(n)
// space complexity--o(1)


// que - 9
function secondLargest(arr) {
    let first = -Infinity, second = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }
    }
    return second;
}
// time complexity --o(n)
// space complexity--o(1)


// que - 10
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
// time complexity --o(n)
// space complexity--o(n)

// code for print reverse array 
let arr=[1,2,3,4,]
    let reversedarr = []; 
    for (let i = arr.length - 1; i >= 0; i--) { 
          reversedarr.push(arr[i]);
    } 

console.log(reversedarry);

// assignment -5 (25/march/2025)




// print the matrix .
let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]

]

let row=0;
         
      for(let i =0; i<arr.length;i++)
      
     for(let j=0; j<arr[0].length; j++)
         row+=arr[1][j]+
         console.log(arr[i][j]);

// return the index of target value in the given array


         let matrix=[
            [1,2,3],
            [4,5,6],
            [7,8,9]
          ]
           let target=8;
          let result = [];
           for (let i = 0; i< matrix.length; i++) {
               for (let j = 0; j< matrix[i].length; j++) {
                   if (matrix[i][j] === target) {
                       result.push(i,j);
                   }
               }
           }
           console.log(result);
       // find tha max sum of row in given matrix.

           let arr = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        
        let maxSum = 0; 
        let result = []; 
        
        for (let i = 0; i < arr.length; i++) {
            let rowSum = 0; 
            for (let j = 0; j < arr[i].length; j++) {
                rowSum += arr[i][j]; 
            }
            result.push(rowSum); 
            if (rowSum > maxSum) { 
                maxSum = rowSum;
            }
        }
        console.log( maxSum);
        
           // assignment-6 (26/march/2025)

         
          // question 1
                   
                   let matrix=[ 
                    [1 , 2 , 3 , 4 ],
                    [ 5 , 6 , 7 , 8],
                    [ 9 , 2 , 3,  4]
               ]
               let target=2;
                         let result = [];
                        for (let i = 0; i< matrix.length; i++) {
                             for (let j = 0; j< matrix[i].length; j++) {
                                  if (matrix[i][j] === target) {
                                       result.push(i,j);
                                  }
                               }
                           }
                           console.log(result);
                      

     // question 2 
              
     let arr = [
        [3, 8, 1],
        [5, 2, 9],
        [4 ,7, 6]
   ];
  
     let maxSum = 0; 
     let result = []; 
    
     for (let i = 0; i < arr.length; i++) {
         let rowSum = 0; 
         for (let j = 0; j < arr[i].length; j++) {
             rowSum += arr[i][j]; 
         }
        result.push(rowSum); 
       if (rowSum > maxSum) { 
           maxSum = rowSum;
        }
    }
    console.log( maxSum);
   
    // question -3
let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
    let row=0;
         
      for(let i =0; i<arr.length;i++)
      
     for(let j=0; j<arr[0].length; j++)
         row+=arr[1][j]+
         console.log(arr[i][j]);
