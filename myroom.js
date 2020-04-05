let room;
let person;
let x;
let y;
let xroom=0;
let yroom=0;
let d;
let m;
let etos;
let h;
function preload(){
    room=loadImage('room.png');
    person=loadImage('ghosty.png')
}

function setup(){
    let canvas=createCanvas(innerWidth,innerHeight);
    canvas.parent('container');
    x=width;
    y=height;
    xroom=-width;
    yroom=-height;

     d = day();
     m= month();
     etos= year();




    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function draw(){
    clear();
    let h=hour();
    let min=minute();
    let sec=second();
    fill(0,0,255);
    textSize(20);
    text('current day: ' + d+'/'+m+'/'+etos,20,30);

    text('current time: '+h+":"+min+':'+sec,width-200,30);
  
frameRate(10);

push();
scale(0.7);
image(room,xroom,yroom);
pop();

push();
scale(0.7);
image(person,x,y+random(-5,5))
pop();
}


function keyPressed() {
    if (keyCode === LEFT_ARROW) {
    x = x-10;
    xroom=xroom+10;
     } else if (keyCode === RIGHT_ARROW) {
    x = x+10;
    xroom=xroom-10;
    }else if (keyCode === UP_ARROW) {
        y = y-10;
        yroom=yroom+10;

        }
        else if (keyCode === DOWN_ARROW) {
            y = y+10;
            yroom=yroom-10;

            }

}