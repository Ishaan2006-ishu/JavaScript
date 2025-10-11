//q1. find the average of entire class.
// let marks=[98,77,89,98,99,68];

// let sum=0;
// for(let i of marks){
//     sum+=i;
// }
// console.log('average = ', sum/marks.length);

//Change the array to store the applying offer
// let price=[250,645,300,900,50];
// for(let  i  =  0;i<price.length;i++){
//     price[i]=price[i]-price[i]*10/100;

// }
// console.log('change list=', price);

// let arr=[1,2,3,4,5,6];

//q3. Create the array and apply the following operation
let companies=["Bloomberg","Microsoft","google","uber","ibm","Netflix"]

companies.shift();
console.log(companies);

companies.splice(3,1,"ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);


