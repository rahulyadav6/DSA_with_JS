let arr = [10,20,30,40,50,60,70];

// Sum of elements
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum);


// Max value in array
// let max = arr[0];
// for(let i=0; i<arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }
// console.log(max);



// Second max elements
// let max = Math.max(arr[0], arr[1]);
// let smax = Math.min(arr[0], arr[1]);
// for(let i=2; i<arr.length; i++){
//     if(arr[i] > max){
//         smax = max;
//         max = arr[i];
//     }else if(arr[i] > smax && max !== arr[i]){
//         smax = arr[i];
//     }
// }
// console.log(max, smax);



// Reverse an array
let i=0;
let j = arr.length-1;
while(i<=j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--
}
console.log(arr);
