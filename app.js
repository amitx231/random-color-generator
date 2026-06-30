let btn=document.querySelector("button");
let div=document.querySelector("div");
let h1= document.querySelector("h1");
function getRandomColor(){

    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let randomColor=`rgb(${red},${green},${blue})`;
    return randomColor;
}
function changeColor()
{
    h1.innerText=getRandomColor();
    div.style.backgroundColor=getRandomColor();
}
btn.addEventListener("click",changeColor);