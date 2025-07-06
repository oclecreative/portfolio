let r = 20;
let spacing = 50;
let cols, rows;
let opacities = [];
let fadeSpeed = 10;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-holder");

  cols = floor(width / spacing);
  rows = floor(height / spacing);

  for (let i = 0; i < cols; i++) {
    opacities[i] = [];
    for (let j = 0; j < rows; j++) {
      opacities[i][j] = 0;
    }
  }
}

function draw() {
  background('white');

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * spacing + spacing / 2;
      let y = j * spacing + spacing / 2;

      if (dist(x, y, mouseX, mouseY) < r) {
        opacities[i][j] = 255;
      } else {
        opacities[i][j] = max(0, opacities[i][j] - fadeSpeed);
      }

      noStroke();
      fill(255, opacities[i][j]);
      ellipse(x, y, r * 2, r * 2);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
