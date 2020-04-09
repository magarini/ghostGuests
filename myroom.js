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

let input;
let button;
function preload(){
    room=loadImage('room09042020.png');
    person=loadImage('ghosty.png')
}

function setup(){
    let canvas=createCanvas(innerWidth,innerHeight);
    canvas.parent('container');
    x=width;
    y=height-50;
    xroom=-width;
    yroom=-height;

     d = day();
     m= month();
     etos= year();

     input = createInput();
     input.position(x-300, y-50);
   
     button = createButton('say sth');
     button.position(input.x + input.width, y-50);
     button.style('background-color', 'white');

     button.mousePressed(greet);
   
     greeting = createElement('h2', '. . .');
   greeting.style('font-weight','bold')
     textAlign(CENTER);
     textSize(50); 

    
}

function windowResized() {
    resizeCanvas(innerwWidth, innerHeight);
  }


function draw(){
    clear();
    let h=hour();
    let min=minute();
    let sec=second();
    fill(0,0,255);
    textSize(20);
    text('current day: ' + d+'/'+m+'/'+etos,100,30);

    text('current time: '+h+":"+min+':'+sec,width-120,30);
  
frameRate(10);

push();
scale(0.7);
image(room,xroom,yroom);
pop();

push();
scale(0.7);
image(person,x,y-50+random(-5,5))
pop();

greeting.position(0.7*x+50, 0.7*y);



if (keyIsDown(LEFT_ARROW)) {
    x = x-2;
    xroom=xroom+10;
     } 
      if (keyIsDown(RIGHT_ARROW)) {
    x = x+2;
    xroom=xroom-10;
    }
    if (keyIsDown(UP_ARROW)) {
        y = y-2;
        yroom=yroom+10;

        }
    if (keyIsDown(DOWN_ARROW)) {
            y = y+2;
            yroom=yroom-10;

            }
}


function greet() {
    const name = input.value();
    greeting.html(name);
    greeting.position(x-100, y-150);

    input.value('');
  
    for (let i = 0; i < 200; i++) {
      push();
      fill(random(255), 255, 255);
      translate(random(width), random(height));
      rotate(random(2 * PI));
      text(name, 0, 0);
      pop();
    }
  }
