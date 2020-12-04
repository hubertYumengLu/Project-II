let i = 1
//judgment on whether to play or pause audio
let brightness = [200, 200, 200, 200, 200, 200, 1000]
//first six values are brightness of circles; last value is brightness of playPauseButton
let audio = []
let music
let button;
// let sound1Gain, sound2Gain, sound3Gain, sound4Gain, sound5Gain, sound6Gain, masterGain;
let tutorial = []
let parts, instruction
let handMovement = loadImage("assets/images/handMovement.gif")


function preload(){
  parts = loadJSON("parts.json")
  instruction = loadJSON("tutorial.json")
  soundFormats("mp3")
  music = loadSound("assets/sounds/Guillaume Tell.mp3")
  console.info(music)
  audio.push(music)
}

function setup() {
  let cnv = createCanvas(1200, 720);
  colorMode(HSB, 1000)
  // cnv.mousePressed(startSound);
}

function draw() {
  background(800,1000,330);
  // load tutorial
  rect(instruction.window[0].x, instruction.window[0].y, instruction.window[0].w, instruction.window[0].h)
  tutorial.push(instruction.window)
  push()
  textSize(instruction.text[0].size)
  fill(instruction.text[0].color)
  text(instruction.text[0].text, instruction.text[0].x, instruction.text[0].y)
  tutorial.push(instruction.text[0])
  pop()
  
  push()
  textSize(instruction.text[1].size)
  fill(instruction.text[1].color)
  text(instruction.text[1].text, instruction.text[1].x, instruction.text[1].y)
  tutorial.push(instruction.text[1])
  pop()
  
  push()
  textSize(instruction.text[2].size)
  fill(instruction.text[2].color)
  text(instruction.text[2].text, instruction.text[2].x, instruction.text[2].y)
  tutorial.push(instruction.text[2])
  pop()
  
  push()
  textSize(instruction.text[3].size)
  textStyle(ITALIC)
  fill(instruction.text[3].color)
  text(instruction.text[3].text, instruction.text[3].x, instruction.text[3].y)
  tutorial.push(instruction.text[3])
  pop()

  //load interface if mouse pressed on canvas
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


  // Volume by Mouse Mechanics 
  let sound1Volume = constrain(map(mouseX,width,0,0,1), 0, 1);
  let sound2Volume = 1-sound1Volume;
  sound1Gain.amp(sound1Volume);
  sound2Gain.amp(sound1Volume);
  sound3Gain.amp(sound2Volume);
  sound4Gain.amp(sound2Volume);
  let masterVolume = constrain(map(mouseY,height,0,0,1), 0, 1);
  masterGain.amp(masterVolume);

  // UI Text based on Mouse Mechanics
  fill(0, 0, 1000)
  text('◄◄◄ Vln1&2 Vol ♫', width/2 - 32, height - 15)
  text('Viola C&B Vol ♫ ►►►', width/2 + 160, height - 15)
  text('Master Volume ♫ ↕', width/2 - 190, height - 15)
  textAlign(LEFT);
  fill(850, 1000, 1000)
  text('M-Vol', 2, height - masterVolume * height * 0.9)
  textAlign(RIGHT);
  fill(200, 1000, 800)
  text('Vln1', width - 5, height - 20 - sound1Volume * height * 0.9);
  fill(400, 1000, 800)
  text('Vln2', width - 5, height - sound1Volume * height * 0.9);
  fill(600, 1000, 800)
  text('Viola', width - 5, height - 20 - sound2Volume * height * 0.9);
  fill(50, 1000, 800)
  text('C&B', width - 5, height - sound2Volume * height * 0.9);
}

function part1(){
  fill(200, 1000, 800 - mouseX - mouseY)
  for (let i = 0; i <= 4; i++){
  circle(width * 1 / 9 + 30 *i, height * 2/3 + 20 * i, 30)
  }
  for (let i = 0; i <= 4; i++){
    circle(width * 2 / 9 + 20 *i, height * 4/7 + 25 * i, 30)
  }
}

function part2(){
  fill(400, 1000, 800 - mouseX - mouseY)
  for (let i = 0; i <= 4; i++){
  circle(width * 5 / 14 + 10 *i, height * 1/2 + 30 * i, 30)
  }
  for (let i = 0; i <= 4; i++){
    circle(width * 5 / 11 +  3 * i, height * 48/100 + 30 * i, 30)
  }
}

function part3(){
  fill(600, 1000, mouseX + brightness[2] - mouseY)
  for (let i = 0; i <= 4; i++){
  circle(width * 9 / 14 - 10 * i, height * 1/2 + 30 * i, 30)
  }
  for (let i = 0; i <= 4; i++){
    circle(width * 6 / 11 -  3 * i, height * 48/100 + 30 * i, 30)
  }
}

function part4(){
  fill(50, 1000, mouseX + brightness[3] - mouseY)
  for (let i = 0; i <= 4; i++){
  circle(width * 8 / 9 - 30 *i, height * 2/3 + 20 * i, 30)
  }
  for (let i = 0; i <= 4; i++){
    circle(width * 7 / 9 - 20 *i, height * 4/7 + 25 * i, 30)
  }
}

function part5(){
  fill(0, 0, 600 - mouseY)
  for (let i = 0; i <= 15; i++){
  circle(50 + 33.33 * i, 150, 30)
  }
}

function part6(){
  fill(120, 1000, 600 - mouseY)
  for (let i = 0; i <= 15; i++){
  circle(50 + 33.33 * i, 100, 30)
  }
}

function playPauseButton(){
  fill(0,0,brightness[7])
  rect(275,350,50,30)

}

// Sound Calls (Start and Stop)
// function startSound() {
//   audio[0].loop();
//   audio[1].loop();
//   audio[2].loop();
//   audio[3].loop();
//   audio[4].loop();
//   audio[5].loop();
//   loop();
// }
// function mouseReleased() {
//   audio[0].pause();
//   audio[1].pause();
//   audio[2].pause();
//   audio[3].pause();
//   audio[4].pause();
//   audio[5].pause();
// }


