const canvas = document.querySelector(".canvas");
const color = document.querySelectorAll(".color");
const range = document.querySelector(".range");
var ctx = canvas.getContext("2d");

canvas.width = 200;
canvas.height = 220;

ctx.lineWidth = 2.5;
ctx.strokeStyle = "black";

let painting = false;

function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
        
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }

}


function onColorChange(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;

}

function onRangeChange(event){
    const width = event.target.value;
    ctx.lineWidth = width;

}


if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseover",stopPainting);
}

Array.from(color).forEach(color =>
    color.addEventListener("click",onColorChange));

range.addEventListener("input",onRangeChange);
