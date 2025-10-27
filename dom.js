

// let h1=document.querySelector("h1");
// h1.innerText+="i am apna college student"
// console.dir(h1.innerText);

// let divs=document.querySelectorAll(".box");

// console.dir(divs);
// divs[0].innerText+="NEW UNIQUE VALUE 1";
// divs[1].innerText+="NEW UNIQUE VALUE 1";
// divs[2].innerText+="NEW UNIQUE VALUE 1";
// let idx=1;
// for(let div of divs){
//    div.innerText=`chnage ${idx}` ;
//    idx++;

    
// }

let btn=document.createElement("button");
btn.innerText="click me";

let box=document.querySelector(".box");
box.append(btn)