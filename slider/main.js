let container=document.querySelector(".gallry");
let preicon=document.getElementById("prebtn");
let nxtbtn=document.getElementById("nxtbtn");

preicon.addEventListener("click",()=>{

    container.style.scrollBehavior="smooth";
    container.scrollLeft -= 900;
});

nxtbtn.addEventListener("click",()=>{

    container.style.scrollBehavior="smooth";
    container.scrollLeft += 900;
});