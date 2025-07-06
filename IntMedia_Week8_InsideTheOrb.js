let images = [];
let numImages = 20; 

function preload() {
  for (let i = 0; i < numImages; i++) {
    images[i] = loadImage(`assets/${i + 1}.png`);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  noStroke();
  describe('Multiple images arranged in a sphere pattern with 3D rotation.');
}

function draw() {
  background('white');
  orbitControl();

  scale(0.7);

  let imgIndex = 0;

  for (let zAngle = 0; zAngle < 180; zAngle += 30) {
    for (let xAngle = 0; xAngle < 360; xAngle += 30) {
      push();
      rotateZ(zAngle);
      rotateX(xAngle);
      translate(0, 400, 0);

      texture(images[imgIndex % images.length]);
plane(50, 50);
imgIndex++;

      pop();
      imgIndex++;
    }
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}