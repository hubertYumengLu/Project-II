// Code in this function is run once, when the sketch is started.
function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 100)
}

// Code in this function is run once per frame. If it draws the same thing each
// time, the sketch is a static image. If it draws something different on
// different frames, the sketch is an animation.
function draw() {
  background(100,0,100);
  noStroke()
  fill('white')
  rect(50, 20, 500,20)
  part1()  
}

function part1(){
  fill(0, 0, 100)
  circle(width * 1 / 5, height / 2, 150)
}
