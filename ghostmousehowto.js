let person;
let inlands;
let xroom=-800;
let yroom=-800;
function preload(){
    inlands=loadImage('inlands.png');
    person=loadImage('ghosty.png')
}

function setup(){
    let canvas=createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    frameRate(10);

    let postcards = selectAll('.polaroid');
for (let i = 0; i < postcards.length; i++) {
    
    postcards[i].position(random(width-500), random(height-500));
    
}
}

function draw(){
    clear();
    let y=random(-3,3);
    push();
scale(.5);
    image(person,mouseX*2,mouseY*2);
pop();
    push();
// scale(0.7);
image(inlands,xroom,yroom);
pop();

if (keyIsDown(LEFT_ARROW)) {
    xroom=xroom+10;
     } 
      if (keyIsDown(RIGHT_ARROW)) {
    xroom=xroom-10;
    }
    if (keyIsDown(UP_ARROW)) {
        yroom=yroom+10;

        }
    if (keyIsDown(DOWN_ARROW)) {
            yroom=yroom-10;

            }

}

