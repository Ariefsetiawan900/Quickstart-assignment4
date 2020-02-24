function operasi(angka){
    let sum = 0;
for (let i = angka.length-1; i>=0 ; i--) {  //looping dari index terakhir
   sum += angka [i]  
    
}
return sum
}
console.log(operasi([123, 9, 27])); // 159
console.log(operasi([1, 5, 9])); //15
console.log(operasi([1, 5])); //6


function operasi1(angka){
    let sum = 0;
for (let i = 0; i<angka.length ; i++) { // looping index ke nol
   sum += angka [i]  
    
}
return sum
}
console.log(operasi1([123, 9, 27])); // 159
console.log(operasi1([1, 5, 9])); //15
console.log(operasi1([1, 5])); //6


