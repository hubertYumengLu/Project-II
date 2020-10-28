// Code in this function is run once, when the sketch is started.
function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 100)
}

// Code in this function is run once per frame. If it draws the same thing each
// time, the sketch is a static image. If it draws something different on
// different frames, the sketch is an animation.
function draw() {
  background(80,100,30);
  noStroke()
  fill('white')
  rect(50, 20, 500,20)
  part1()
  part2()
  part3()
  part4()
  part5()
  part6()
}
function part1(){
  let brightness1 = 20
  fill(20, 100, brightness1)
  for (let i = 0; i <= 4; i++){
  circle(width * 1 / 9 + 30 *i, height * 2/3 + 20 * i, 30)
  }
  for (let i = 0; i <= 4; i++){
    circle(width * 2 / 9 + 20 *i, height * 4/7 + 25 * i, 30)
  }
}

function part2(){
  let brightness2 = 20
  fill(40, 100, brightness2)
  for (let i = 0; i <= 4; i++){
  circle(width * 5 / 14 + 10 *i, height * 1/2 + 30 * i, 30)
  }
  for (let i = 0; i <= 4; i++){
    circle(width * 5 / 11 +  3 * i, height * 48/100 + 30 * i, 30)
  }
}

function part3(){
  let brightness3 = 20
  fill(60, 100, brightness3)
  for (let i = 0; i <= 4; i++){
  circle(width * 9 / 14 - 10 * i, height * 1/2 + 30 * i, 30)
  }
  for (let i = 0; i <= 4; i++){
    circle(width * 6 / 11 -  3 * i, height * 48/100 + 30 * i, 30)
  }
}

function part4(){
  let brightness4 = 20
  fill(5, 100, brightness4)
  for (let i = 0; i <= 4; i++){
  circle(width * 8 / 9 - 30 *i, height * 2/3 + 20 * i, 30)
  }
  for (let i = 0; i <= 4; i++){
    circle(width * 7 / 9 - 20 *i, height * 4/7 + 25 * i, 30)
  }
}

function part5(){
  let brightness5 = 20
  fill(0, 0, brightness5)
  for (let i = 0; i <= 15; i++){
  circle(50 + 33.33 * i, 150, 30)
  }
}

function part6(){
  let brightness6 = 20
  fill(12, 100, brightness6)
  for (let i = 0; i <= 15; i++){
  circle(50 + 33.33 * i, 100, 30)
  }
}
