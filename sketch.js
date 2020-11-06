var hour, minute, second;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
hr= hour();
mn= minute();
sec= second();
scAngle= map( 0, 60, 0, 360);
}
function draw() {
  background("black");
  let c = map(mouseX, 0, width, 0, 175);
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
}
let h = hour();
text('Current hour:\n' + h, 5, 90);
let s = second();
text('Current second: \n' + s, 5, 50);
let m = minute();
text('Current minute: \n' + m, 5, 70);