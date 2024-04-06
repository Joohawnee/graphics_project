let cols, rows;
let scl = 20;
let w = 1400;
let h = 500;


let flying = 0;

let terrain = [];

function setup() {
  createCanvas(600, 600, WEBGL);
  cols = w / scl;
  rows = h / scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
    }
  }
}

function drawSpaceship(x, z, angle) {
  push();
  translate(x, 0, z);
  rotateY(angle);
  rotateX(PI / 4); 
  stroke(150);
  fill(100);
  sphere(50);
  stroke(120);
  fill(0, 150, 150);
  cone(-100, -80, 24);
  
  pop();
}

function draw() {
  flying += 0.1;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }
  
  background(0, 0, 225);
  translate(0, 50);
  noStroke();
  rotateX(PI / 3);
  fill(200, 200, 200, 167);
  translate(-w / 2, -h / 2);
  for (let y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
  push();
  translate(w / 2, h / 2);
  translate(mouseX - width / 2, (mouseY - height / 2) * 6);
  rotate(PI / 5);
  
  
  drawSpaceship(0, 0, 500); // 우주선의 위치와 각도 설정
  
  pop();
   
}
