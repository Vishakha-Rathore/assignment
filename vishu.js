// find the second largest number in array 
// let arr=[ 5,6,3,2,1]
// let i=arr.length-1;
// let temp=[];
// for(i=0;i<arr.length ;i++){
//     if(arr[arr.length-1]>temp)
//     temp.push(arr[i]);
// }
// console.log(temp);

// Given an array of student details increase the student marks by 5 and print the new object.
// let obj=[{ 
//  neme: "Pal"
// age: "22"
// marks:"55",
// name:"Manish"
// age:"55"
// Mark:"75"
//}]


// let obj=[{ 
//      neme: "Pal",
//      age: 22,
//      marks:55,},

//     { name:"Manish",
//      age:55,
//      Marks:75,
//     }]
//     let temp=[]


    
//     for(i=0;i<obj.length;i++){
//         obj[i[]]=+5;
//         temp.push(obj[i[]])
        
//     }
//     console.log(obj);
    
    
// 
let arr=[2,2,3,1,4,4]
let temp=[];
for(i=0;i<arr.length;i++){
    if(arr[i]==arr[i+1]){
        temp.push(arr[i]);
    }
}
console.log(temp)