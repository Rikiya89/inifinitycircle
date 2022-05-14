let r,g,b;

function setup() {
  createCanvas(400, 400);
  background(255);
  r = random(255);
  g = random(255);
  b = random(255);
  noLoop();
}

function draw() {
  
  for (let i = 0; i < 900; i++){
    stroke(r,g,b);
    fill(random(255),random(255),random(255),random(255));
    ellipse(random(400), random(400), random(100));
  }
}