function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('multidraggable');
//   canvas.position(0, 0);
  canvas.style('z-index','-1');
canvas.position(0,80);
    let buttons = selectAll('.imgdrag');
for (let i = 0; i < buttons.length; i++) {
    
    buttons[i].position(random(width-200), random(height-200));
    console.log(buttons[i]);
  }
}