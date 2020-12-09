let i = 1
//judgment on whether to play or pause audio
let brightness = [200, 200, 200, 200, 200, 200, 1000]
//first six values are brightness of circles; last value is brightness of playPauseButton
let tt = []
let audio = []
let music
let button;
// let sound1Gain, sound2Gain, sound3Gain, sound4Gain, sound5Gain, sound6Gain, masterGain;
let cnv
let parts
let instruction
let gif

function preload() {
  instruction = loadJSON("assets/jsons/tutorial.json")
  gif = loadImage("assets/images/handMovement.gif")
  soundFormats("mp3")
  music = loadSound("assets/sounds/Guillaume Tell.mp3")
  console.info(music)
  audio.push(music)
}

function setup() {
  cnv = createCanvas(1200, 720);
  colorMode(HSB, 1000)
  // cnv.mousePressed(startSound);
}

function draw() {
  background(800,1000,330);
  
  // load tutorial
  rect(instruction.window[0].x, instruction.window[0].y, instruction.window[0].w, instruction.window[0].h)
  tt.push(instruction.window)
  push()
  textSize(instruction.text[0].size)
  fill(instruction.text[0].color)
  text(instruction.text[0].text, instruction.text[0].x, instruction.text[0].y)
  tt.push(instruction.text[0])
  pop()
  
  push()
  textSize(instruction.text[1].size)
  fill(instruction.text[1].color)
  text(instruction.text[1].text, instruction.text[1].x, instruction.text[1].y)
  tt.push(instruction.text[1])
  pop()
  
  push()
  textSize(instruction.text[2].size)
  fill(instruction.text[2].color)
  text(instruction.text[2].text, instruction.text[2].x, instruction.text[2].y)
  tt.push(instruction.text[2])
  pop()
  
  push()
  textSize(instruction.text[3].size)
  textStyle(ITALIC)
  fill(instruction.text[3].color)
  text(instruction.text[3].text, instruction.text[3].x, instruction.text[3].y)
  tt.push(instruction.text[3])
  pop()

  let scale = 325 / gif.width
  image(gif, 480, 330, gif.width * scale, gif.height * scale)

  //load interface if mouse pressed on canvas
  // Original Canvas Size for Reference (600,400)
  
  colorMode(HSB, 1000)
  cnv.mousePressed(start);
  // Conjoining all Audio Files (No need any longer? -- Hubert)
  // masterGain = new p5.Gain()
  // masterGain.connect()
  // audio[0].disconnect()
  // sound1Gain = new p5.Gain()
  // sound1Gain.setInput(audio[0])
  // sound1Gain.connect(masterGain)
  // audio[1].disconnect()
  // sound2Gain = new p5.Gain()
  // sound2Gain.setInput(audio[1])
  // sound2Gain.connect(masterGain)
  // audio[2].disconnect()
  // sound3Gain = new p5.Gain()
  // sound3Gain.setInput(audio[2])
  // sound3Gain.connect(masterGain)
  // audio[3].disconnect()
  // sound4Gain = new p5.Gain()
  // sound4Gain.setInput(audio[3])
  // sound4Gain.connect(masterGain)
  // audio[4].disconnect()
  // sound5Gain = new p5.Gain()
  // sound5Gain.setInput(audio[4])
  // sound5Gain.connect(masterGain)
  // audio[5].disconnect()
  // sound6Gain = new p5.Gain()
  // sound6Gain.setInput(audio[5])
  // sound6Gain.connect(masterGain)
}

function start() {
  // createCanvas(1200, 720)
  background(800, 1000, 330);
  noStroke()
  fill('white')
  rect(width / 14, height / 20, width - 200, 20)
  playPauseButton()
  part1()
  part2()
  part3()
  part4()
  part5()
  part6()
  // Volume by Mouse Mechanics
  let sound1Volume = constrain(map(mouseX, width, 0, 0, 1), 0, 1);
  // let sound2Volume = 1 - sound1Volume;
  audio[0].amp(sound1Volume);
  // sound2Gain.amp(sound1Volume);
  // sound3Gain.amp(sound2Volume);
  // sound4Gain.amp(sound2Volume);
  // let masterVolume = constrain(map(mouseY, height, 0, 0, 1), 0, 1);
  // masterGain.amp(masterVolume);


function part1() {
  fill(200, 1000, 800 - (mouseX / 2.133) - (mouseY / 1.8))
  for (let i = 0; i <= 4; i++) {
    circle(width * 1 / 9 + 30 * i, height * 2 / 3 + 20 * i, 30)
  }
  for (let i = 0; i <= 4; i++) {
    circle(width * 2 / 9 + 20 * i, height * 4 / 7 + 25 * i, 30)
  }
}

function part2() {
  fill(400, 1000, 800 - (mouseX / 2.133) - (mouseY / 1.8))
  for (let i = 0; i <= 4; i++) {
    circle(width * 5 / 14 + 10 * i, height * 1 / 2 + 30 * i, 30)
  }
  for (let i = 0; i <= 4; i++) {
    circle(width * 5 / 11 + 3 * i, height * 48 / 100 + 30 * i, 30)
  }
}

function part3() {
  fill(600, 1000, (mouseX / 2.133) + brightness[2] - (mouseY / 1.8))
  for (let i = 0; i <= 4; i++) {
    circle(width * 9 / 14 - 10 * i, height * 1 / 2 + 30 * i, 30)
  }
  for (let i = 0; i <= 4; i++) {
    circle(width * 6 / 11 - 3 * i, height * 48 / 100 + 30 * i, 30)
  }
}

function part4() {
  fill(50, 1000, (mouseX / 2.133) + brightness[3] - (mouseY / 1.8))
  for (let i = 0; i <= 4; i++) {
    circle(width * 8 / 9 - 30 * i, height * 2 / 3 + 20 * i, 30)
  }
  for (let i = 0; i <= 4; i++) {
    circle(width * 7 / 9 - 20 * i, height * 4 / 7 + 25 * i, 30)
  }
}

function part5() {
  fill(0, 0, 600 - (mouseY / 1.8))
  for (let i = 0; i <= 15; i++) {
    circle(40 + width / 14 + 33.33 * i * 2, height / 7, 30)
    circle(40 + width / 14 + 33.33 * i * 2, (height / 7) + 33.33, 30)
  }
}

function part6() {
  fill(120, 1000, 600 - (mouseY / 1.8))
  for (let i = 0; i <= 15; i++) {
    circle(40 + width / 14 + 33.33 * i * 2, (height / 3.5), 30)
    circle(40 + width / 14 + 33.33 * i * 2, (height / 3.5) + 33.33, 30)
  }
}

function playPauseButton() {
  fill(0, 0, brightness[7])
  rect(450, 530, 380, 150)
  fill(120, 1000, brightness[7])
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

}
