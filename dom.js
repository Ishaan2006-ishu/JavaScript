

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

// let btn=document.createElement("button");
// btn.innerText="click me";

// let box=document.querySelector(".box");
// box.append(btn)

//create a new button element.give it a text "click me" , background color of red  and tect color of white

let btn=document.createElement("button");
btn.innerHTML="click me";
btn.style.backgroundColor="red";
btn.style.color="white";

let putit=document.querySelector("body");
putit.prepend(btn);

// crete a <p> tag in html, give it a class and soes tyle
// Now write a new class in css and try to append this class to the <p> element
//solve it by class list?


// let para=document.querySelector("p")

// para.setAttribute("class","newContent");

// para.classList.add("newContent");
