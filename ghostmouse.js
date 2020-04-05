let person;
let inlands;
let xroom=-200;
let yroom=-200;
function preload(){
    inlands=loadImage('inlands.png');
    person=loadImage('ghosty.png')
}

function setup(){
    let canvas=createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    frameRate(10);
    
}

function draw(){
    clear();
    let y=random(-3,3);
    push();
scale(.5);
    image(person,mouseX,mouseY+y);
pop();
    push();
scale(0.7);
image(inlands,xroom,yroom);
pop();
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
   
    xroom=xroom+10;
     } else if (keyCode === RIGHT_ARROW) {
    
    xroom=xroom-10;
    }else if (keyCode === UP_ARROW) {
        yroom=yroom+10;

        }
        else if (keyCode === DOWN_ARROW) {
           
            yroom=yroom-10;

            }

}