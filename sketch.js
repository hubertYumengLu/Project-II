let brightness = [200, 200, 200, 200, 200, 200]
var vln1, vln2, vla, cb, wnd, harp
let audio = []
function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 1000)
  
  vln1 = loadSound("Barcarole (Violin I).mp3")
  audio.push(vln1)
  vln2 = loadSound("Barcarole (Violin II).mp3")
  audio.push(vln2)
  vla = loadSound("Barcarole (Viola).mp3")
  audio.push(vla)
  cb = loadSound("Barcarole (Cello & Bass).mp3")
  audio.push(cb)
  ww = loadSound("Barcarole (Woodwinds).mp3")
  audio.push(wnd)
  harp = loadSound("Barcarole (Harp & Triangle).mp3")
  audio.push(harp)
}

function draw() {
  background(800,1000,300);
  noStroke()
  fill('white')
  rect(50, 20, 500,20)
  playPauseButton()
  part1()
  part2()
  part3()
  part4()
  part5()
  part6()
  vln1.play()
}

function part1(){
  fill(200, 1000, brightness[0])
  for (let i = 0; i <= 4; i++){
  circle(width * 1 / 9 + 30 *i, height * 2/3 + 20 * i, 30)
  }
  for (let i = 0; i <= 4; i++){
    circle(width * 2 / 9 + 20 *i, height * 4/7 + 25 * i, 30)
  }
}

function part2(){
  fill(400, 1000, brightness[1])
  for (let i = 0; i <= 4; i++){
  circle(width * 5 / 14 + 10 *i, height * 1/2 + 30 * i, 30)
  }
  for (let i = 0; i <= 4; i++){
    circle(width * 5 / 11 +  3 * i, height * 48/100 + 30 * i, 30)
  }
}

function part3(){
  fill(600, 1000, brightness[2])
  for (let i = 0; i <= 4; i++){
  circle(width * 9 / 14 - 10 * i, height * 1/2 + 30 * i, 30)
  }
  for (let i = 0; i <= 4; i++){
    circle(width * 6 / 11 -  3 * i, height * 48/100 + 30 * i, 30)
  }
}

function part4(){
  fill(50, 1000, brightness[3])
  for (let i = 0; i <= 4; i++){
  circle(width * 8 / 9 - 30 *i, height * 2/3 + 20 * i, 30)
  }
  for (let i = 0; i <= 4; i++){
    circle(width * 7 / 9 - 20 *i, height * 4/7 + 25 * i, 30)
  }
}

function part5(){
  fill(0, 0, brightness[4])
  for (let i = 0; i <= 15; i++){
  circle(50 + 33.33 * i, 150, 30)
  }
}

function part6(){
  fill(120, 1000, brightness[5])
  for (let i = 0; i <= 15; i++){
  circle(50 + 33.33 * i, 100, 30)
  }
}

function playPauseButton(){
  fill(0,0,1000)
  rect(275,350,50,30)
  fill(120,1000,1000)
  triangle(285,355,285,375,315,365)
}