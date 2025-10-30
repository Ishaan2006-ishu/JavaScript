// const employee={
//     clacTax(){
//         console.log('tax rate is 10%');
        
//     }
// };

// const ishaan={
//     salary:50000,
// }
// const ishaan1={
//     salary:50000,
// }
// const ishaan2={
//     salary:50000,
//     clacTax(){
//         console.log('tax rate is 13%');
        
//     }
// }
// const ishaan3={
//     salary:50000,
// }
// const ishaan4={
//     salary:50000,
// }


// ishaan.__proto__=employee;

// class toyota{
//     constructor(brand){
//         this.brand=brand;
//         console.log('welcome to toyota factory');
        

//     }

    
    
//     start(){
//         console.log('start');
        
//     }

//     stop(){
//         console.log('stop');
        
//     }
//     setbrand(brand){
//         this.brand=brand;
//         console.log(brand);
        
//     }
    


// }

// let fortuner=new toyota();
// console.log(fortuner);

// fortuner.start();
// fortuner.setbrand("lexus");

// class person{
//     constructor(name){
        
        
//         this.species="human";
//         this.name=name;
//     }
//     eat(){
//         console.log('eat');
        
//     }
//     sleep(){
//         console.log('sleep');
        
//     }
//     work(){
//         console.log('do nothing');
        
//     }
    


// }

// class engineer extends person{
//     constructor(name){
        
        
//         super(name);
        
//         // this.branch=branch;
//     }
//     work(){
//         super.eat();
//         console.log('solve problem and build something');
        
//     }

// }

// let engineerobj=new engineer("ishaan");
// console.log(engineerobj);
// engineerobj.work();


//you are creating a website for your college . create a class
//user with 2 properties,name & email.it also has a method 
// called viewdata() that allow user to view website data.

// class user{
//     constructor(email,name){
//         this.email=email;
//         this.name=name;
//     }
//     viewdata(){
//         console.log('data');
        
//     }
// }

// let std1=new user("ish@gmail.com","ishaan");
// console.log(std1);
