function operation(number){
    let sum = 0;
for (let i = number.length-1; i>=0 ; i--) {  //looping dari index terakhir
   sum += number [i]  
    
}
return sum
}
console.log(operation([123, 9, 27])); // 159
console.log(operation([1, 5, 9])); //15
console.log(operation([1, 5])); //6


// function operasi1(angka){
//     let sum = 0;
// for (let i = 0; i<angka.length ; i++) {  looping index ke nol
//    sum += angka [i]  
    
// }
// return sum
// }
// console.log(operasi1([123, 9, 27])); // 159
// console.log(operasi1([1, 5, 9])); //15
// console.log(operasi1([1, 5])); //6


