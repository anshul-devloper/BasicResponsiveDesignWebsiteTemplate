// nav bar
let a=document.querySelector("ul");
let b=document.querySelector("#sign");
let one=document.querySelector("#sone");
let two=document.querySelector("#stwo");
let three=document.querySelector("#sthree");
let logoo=document.querySelector("#logo");

function func(){
a.classList.toggle("ull");
one.classList.toggle("spanone");
two.classList.toggle("spantwo");
three.classList.toggle("spanthree");
logoo.classList.toggle("logoOpacity");
}


b.addEventListener("click",func);

let he=document.querySelector("#ho");
let at=document.querySelector("#abo");
let se=document.querySelector("#serve");
let butt=document.querySelector("#button");

if(window.innerWidth<830)
{
   he.addEventListener("click",func);
   at.addEventListener("click",func);
   se.addEventListener("click",func);
   butt.addEventListener("click",func);
}


function f(){

  
    let home=document.querySelector("#ho");
    let about=document.querySelector("#abo");
    let service=document.querySelector("#serve");
    let scroll=window.scrollY;

    if(window.innerWidth > 830 && scroll < 600)
    {
        home.classList.add("border");
        about.classList.remove("border");
    }
else if(window.innerWidth > 830 && scroll < 1450)
    {
        about.classList.add("border");
        home.classList.remove("border");
        service.classList.remove("border");
    }
    else if(window.innerWidth > 830 && scroll < 2200)
    {
        service.classList.add("border");
        about.classList.remove("border");
    }
    else{
        home.classList.remove("border");
        about.classList.remove("border");
        service.classList.remove("border");
    }
    
}

  window.addEventListener("scroll",f);
