
// assignment -7  

// que -1
// let 
// matrix=[
//     [ 1, 2,3],
//     [4, 5, 6],
//     [7, 8, 9]
    
// ]
// let transpose=[];
// for(let i =0; i<matrix.length; i++){
//        row=[];
//     for(let j=0; j<matrix[i].length;j++){
//         row.push(matrix[j][i]);
//     }
//         transpose.push(row);
// }
//   console.log(transpose);

// que -2

// let  matrix=[
//         [ 1, 2,3],
//         [4, 5, 6],
//         [7, 8, 9]
//                       ];
      
//      let maxSum = 0; 
//      let result = []; 
    
//      for (let i = 0; i < matrix.length; i++) {
//          let rowSum = 0; 
//          for (let j = 0; j < matrix[i].length; j++) {
//              rowSum += matrix[i][j]; 
//          }
//         result.push(rowSum); 
//        if (rowSum > maxSum) { 
//            maxSum = rowSum;
//         }
//     }
//     console.log( maxSum);

// que -3

            //        let matrix=[ 
            //         [1 , 2 , 3],
            //         [4,  5 , 6],
            //         [ 7,  8, 9]
            //    ]
            //    let target=8;
            //              let result = [];
            //             for (let i = 0; i< matrix.length; i++) {
            //                  for (let j = 0; j< matrix[i].length; j++) {
            //                       if (matrix[i][j] === target) {
            //                            result.push(i,j);
            //                       }
            //                    }
            //                }
            //                console.log(result);

  // que -4
 //         let matrix=[ 
//          [1 , 2 , 3], 
//          [4,  5 , 6],
//          [ 7,  8, 9]
//    ]
//    let n = matrix.length;
//     let result = [];

//     for (let i = 0; i < n; i++) {
//         result.push([]);
//         for (let j = 0; j < n; j++) {
//             result[i][j] = matrix[n - j - 1][i];
//         }
//     }
//     console.log(result);


// que  -5
// let matrix=[ 
//             [1 , 2 , 3], 
//             [4,  5 , 6],
//               [ 7,  8, 9]
//         ]

//         let result = [];

//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             result.push(matrix[i][j]);
//         }
//     }
//     console.log(result);


// assignmment -8

// que-1

// let arr = [7, 10, 4, 3, 20, 15];
// let k = 3;
// let kthSmallest = arr[k - 1];
// let kthLargest = arr[arr.length - k];
// for(let i=0; i<arr.length;i++){
//     if (k < 1 || k > arr.length) {
//         arr.sort((a, b) => a - b);
//     }

// }
//     console.log(kthSmallest , kthLargest);
    
// que -2 not attampt

    
    // que-3
// let arr=[10,20,30,40,50]
// let n=arr.length;
// let first=arr[0];
// let last=arr[n-1];
// for(let i=0; i<n; i++){
//     if(arr[i]== first){
//         arr.push(first);
//     }
//     else if(arr[i]== last)
//         arr.push(last);
//     }


// console.log(first, last);

// assignment-9

// que-1
// 

//que 2
// let arr = [5, 2, 9, 1, 6];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     sum += arr[i];
//   }
// }

// console.log(sum); 

//que-3
// let arr = [3, 2, 2, 3];
// let val = 3;
// let k = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== val) {
//     arr[k] = arr[i];
//     k++;
//   }
// }

// console.log(k);     



//assignment-10
// que-1

// const sum=(a, b)=> {
//     return a + b;
//   }
//   console.log(sum(5, 10));
  

// // que-2
// const isPrime=(n)=> {
//     if (n <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) 
//         return false;
//     }
//     return true;
//   } 
//   console.log(isPrime(7));  
//   console.log(isPrime(10)); 

// que -3

// const reverseString=(str)=> {
//     return str.split('').reverse().join('');
//   }
//   console.log(reverseString("hello")); 
  

// que-4
// const findMax=(arr)=> {
//     if (arr.length === 0) return null;
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//     return max;
//   }
//  let arr= [10, 25, 3, 100, 56]
//   console.log(findMax(arr[]));

  
  // que-5
//   const countVowels=(str)=> {
//     let count = 0;
  
//     for (let i = 0; i < str.length; i++) {
//       let ch = str[i].toLowerCase();
//       if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   console.log(countVowels("JavaScript")); 


// assignment -11

//ques-1
// let arr = [10, 20, 30, 40];

// let first = arr[0];
// let last = arr[arr.length - 1];

// console.log([first, last]); 


// que-2
let n1 = [[1], [2]];
let n2 = [3, [4, 5]];

let combined = n1.concat(n2);

console.log(combined);


// que-3 not attampt
