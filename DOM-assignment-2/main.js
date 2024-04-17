/* let keys=document.querySelectorAll("#keyboard > div");
let bag="";

for(let i=0; i<keys.length;i++){
    keys[i].addEventListener( "click",(even)=>{
        let cuunertkey=event.target.innerText;
        if(cuunertkey=="C"){
            bag="";
            document.querySelector("#display").innerText="";
        }
        else if(cuunertkey=="=")
        {
            console.log(bag);
            document.querySelector("#display").innerText = eval(bag);
        }
        else
        {
            bag+=cuunertkey;
            console.log(bag);
            document.querySelector("#display").innerText=bag;
        }
    })   
} */


let keys=document.querySelectorAll("#keyboard>div");
let bag="";

for(let i=0;i<keys.length;i++)
{
    keys[i].addEventListener("click",(fun)=>{
        
        let currentkey=event.target.innerText;
        if(currentkey=="C")
        {
            bag=""
            document.querySelector("#display").innerText="";
        }
        else if(currentkey=="=")
        {
            console.log(bag);
            document.querySelector("#display").innerText=eval(bag);
        }
        else
        {
            bag+=currentkey;
            console.log(bag);
            document.querySelector("#display").innerText=bag;
        }
    })
}