let btn=document.querySelector(".btn");
// btn.onclick=(evt)=>{
//     console.log('btn was clicked');
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
    
// }

// BY EVENT EVENT LISTENER

// btn.addEventListener("click",(evt)=>{
//     console.log('handler 1');
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
    
// })

// btn.addEventListener("click",()=>{
//     console.log('handler 2');
    
// })

// let handler3=()=>{
//     console.log('handler 3');
// }
// btn.addEventListener("click",handler3);
// btn.addEventListener("click",()=>{
//     console.log('handler 4');
    
// })

// btn.removeEventListener("click",handler3)

// chnage the  screen color from light to dark or dark to light when someone clicked on it.

let curmode="light";

btn.addEventListener("click",()=>{
    if(curmode === "light"){
        curmode="dark";
        document.querySelector("body").style.backgroundColor="black";
        
    }
    else{
        curmode="light";
        document.querySelector("body").style.backgroundColor="white";

    }

})