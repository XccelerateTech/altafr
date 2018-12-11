//store the canvas draft and real into variables to make it easier to access
let canvasReal = document.getElementById('canvas-real')
let canvasDraft = document.getElementById('canvas-draft')
//get context of the canvas element in 2d
let contextReal = canvasReal.getContext('2d');
let contextDraft = canvasDraft.getContext('2d');

//define dragging variable, boolean value - current function so that you can switch between the classes.
let dragging = false;
let currentFunction;

//handle mouse events
$('#canvas-draft').mousedown(function(e){
    let mouseX = e.pageX - this.offsetLeft; //get the x and y coordinates - on canvas minus how much the canvas is offset from the browser window
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseDown([mouseX, mouseY], e); //pass coordinates to the call functionality
    dragging= true;
})

$('#canvas-draft').mousemove(function(e){
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    if(dragging){
        currentFunction.onDragging([mouseX,mouseY],e);
    }
    currentFunction.onMouseMove([mouseX, mouseY], e);
});

$('#canvas-draft').mouseleave(function(e){
    dragging = false;
    let mouseX = e.page - this.offsetLeft;
    let mouseY = e.page - this.offsetTop;
    currentFunction.onMouseLeave([mouseX, mouseY],e);
});

$('#canvas-draft').mouseenter(function(e){
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseEnter([mouseX, mouseY], e);
});

//construct an empty class with all mouse events used and then
//each class extends from this mother class to have different functionalites
class PaintFunction{
    constructor(){}
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
}





// context.strokeStyle = '#df4b26';
// context.lineJoin = 'round';
// context.lineWidth = 5;
// $('#canvas-draft').mousedown(function (e){
//     let mouseX = e.offsetX - this.offsetLeft;
//     let mouseY = e.offsetY - this.offsetRight;

//     context.beginPath();
//     context.moveTo(mouseX,mouseY);
//     dragging = true;
// });

// $('#canvas-draft').mousemove(function (e){
//     if(dragging){
//         let mouseX = e.offsetX;
//         let mouseY = e.offsetY;
//         draw(mouseX,mouseY)
//     }
// });

// $('#canvas-draft').mouseup(function (e){
//     dragging = false;
// });
// $('#canvas-draft').mouseleave(function (e){
//     dragging = false;
// });

// function draw(x,y){
//     context.lineTo(x,y);
//     context.moveTo(x,y);
//     context.closePath();
//     context.stroke();
// }