let i = 1
let s = 0
//judgment on whether to play or pause audio
let brightness = [200, 200, 200, 200, 200, 200]
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
let scene = 0
let cam
let poseNet
let leftWristX, leftWristY, rightWristX, rightWristY, leftCircleX, leftCircleY, rightCircleX, rightCircleY

function preload() {
  instruction = loadJSON("assets/jsons/tutorial.json")
  gif = loadImage("assets/images/handMovement.gif")
  soundFormats("mp3")
  music = loadSound("assets/sounds/Guillaume Tell.mp3")
  // console.info(music)
  audio.push(music)

}

function setup() {
  createCanvas(1280, 720)
  cam = createCapture(VIDEO)
  poseNet = ml5.poseNet(cam, { flipHorizontal: true }, modelReady)
  poseNet.on('pose', gotPoses)
  colorMode(HSB, 1000)
  // cnv.mousePressed(startSound);
}

function move() {
  if (s == 0) {
    s = 1
    let elem = document.getElementById("myBar")
    let width = 1
    let id = setInterval(frame, 1910)
    function frame() {
      if (width >= 100) {
        clearInterval(id)
        s = 0
      } else {
        width++
        elem.style.width = width + "%"
      }
    }
  }
}


function draw() {
  background(800, 1000, 330);
  if (scene == 0) {
    tutorial()
  } else {
    start()
  }
}

function tutorial() {
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

  push()
  textSize(instruction.text[4].size)
  textStyle(ITALIC)
  fill(instruction.text[4].color)
  text(instruction.text[4].text, instruction.text[4].x, instruction.text[4].y)
  tt.push(instruction.text[4])
  pop()

  let scale = 325 / gif.width
  image(gif, 480, 330, gif.width * scale, gif.height * scale)
}

function start() {
  background(800, 1000, 330);
  noStroke()
  fill('white')

  //play bar
  rect(width / 14, height / 20, width * 12 / 14, 20)

  podium()
  part1()
  part2()
  part3()
  part4()
  part5()
  part6()
  // Volume by Mouse Mechanics
  // let sound1Volume = constrain(map(mouseX, width, 0, 0, 1), 0, 1);
  // let sound2Volume = 1 - sound1Volume;
  // audio[0].amp(sound1Volume);
  // sound2Gain.amp(sound1Volume);
  // sound3Gain.amp(sound2Volume);
  // sound4Gain.amp(sound2Volume);
  // let masterVolume = constrain(map(mouseY, height, 0, 0, 1), 0, 1);
  // masterGain.amp(masterVolume);

  push()
  fill('#CCCCCC')
  circle(leftCircleX, leftCircleY, 30)
  circle(rightCircleX, rightCircleY, 30)
  pop()


  function part1() {
    fill(200, 1000, 800 - leftWristX - leftWristY)
    for (let i = 0; i <= 4; i++) {
      circle(width * 1 / 9 + 30 * i, height * 2 / 3 + 20 * i, 30)
    }
    for (let i = 0; i <= 4; i++) {
      circle(width * 2 / 9 + 20 * i, height * 4 / 7 + 25 * i, 30)
    }
  }

  function part2() {
    fill(400, 1000, 800 - leftWristX - leftWristY)
    for (let i = 0; i <= 4; i++) {
      circle(width * 5 / 14 + 10 * i, height * 1 / 2 + 30 * i, 30)
    }
    for (let i = 0; i <= 4; i++) {
      circle(width * 5 / 11 + 3 * i, height * 48 / 100 + 30 * i, 30)
    }
  }

  function part3() {
    fill(600, 1000, (rightWristX) + 100 - (rightWristY))
    for (let i = 0; i <= 4; i++) {
      circle(width * 9 / 14 - 10 * i, height * 1 / 2 + 30 * i, 30)
    }
    for (let i = 0; i <= 4; i++) {
      circle(width * 6 / 11 - 3 * i, height * 48 / 100 + 30 * i, 30)
    }
  }

  function part4() {
    fill(50, 1000, (rightWristX) + 100 - (rightWristY))
    for (let i = 0; i <= 4; i++) {
      circle(width * 8 / 9 - 30 * i, height * 2 / 3 + 20 * i, 30)
    }
    for (let i = 0; i <= 4; i++) {
      circle(width * 7 / 9 - 20 * i, height * 4 / 7 + 25 * i, 30)
    }
  }

  function part5() {
    fill(0, 0, 600 - ((leftWristY + rightWristY) - 300))
    for (let i = 0; i <= 15; i++) {
      circle(40 + width / 14 + 33.33 * i * 2, height / 7, 30)
      circle(40 + width / 14 + 33.33 * i * 2, (height / 7) + 33.33, 30)
    }
  }

  function part6() {
    fill(120, 1000, 600 - ((leftWristY + rightWristY) - 300))
    for (let i = 0; i <= 15; i++) {
      circle(40 + width / 14 + 33.33 * i * 2, (height / 3.5), 30)
      circle(40 + width / 14 + 33.33 * i * 2, (height / 3.5) + 33.33, 30)
    }
  }

  function podium() {
    let newSize = 250 / cam.width

    push()
    translate(510, 530)
    translate(cam.width * newSize, 0);
    scale(-1, 1)
    image(cam, 0, 0, cam.width * newSize, cam.height * newSize)
    pop()

    push()
    fill('yellow')
    leftCircleX = map(leftWristX, 0, cam.width, 510, 510 + cam.width * newSize)
    leftCircleY = map(leftWristY, 0, cam.height, 530, 530 + cam.height * newSize)
    rightCircleX = map(rightWristX, 0, cam.width, 510, 510 + cam.width * newSize)
    rightCircleY = map(rightWristY, 0, cam.height, 530, 530 + cam.height * newSize)
    circle(510 + cam.width * newSize / 3, 530 + cam.height * newSize * 3 / 5, 15)
    circle(510 + cam.width * newSize * 2 / 3, 530 + cam.height * newSize * 3 / 5, 15)
    let sound1Volume = constrain(map((leftWristY) + (rightWristY), height, 0, 0, 1), 0, 1);
    audio[0].amp((sound1Volume))
    pop()
  }

}

function modelReady() {
  console.log('Model Ready!')
}

function gotPoses(pose) {
  console.log(pose)
  leftWristX = pose[0].pose.keypoints[9].position.x
  leftWristY = pose[0].pose.keypoints[9].position.y
  rightWristX = pose[0].pose.keypoints[10].position.x
  rightWristY = pose[0].pose.keypoints[10].position.y
}


function mousePressed() {
  scene = 1
  move()
  if (music.isPlaying() == true) {
    music.pause()
  } else {
    music.play()
  }
}
