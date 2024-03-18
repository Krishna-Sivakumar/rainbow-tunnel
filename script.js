function setup() {
  let c = createCanvas(500, 500);
  c.parent('p5Div');
  rectMode(CENTER);
  is_dynamic = false;
}

function keyPressed() {
  if (keyCode == 32) {
    // space bar is hit
    is_dynamic = !is_dynamic;
  }
}

function sigmoid(i) {
    i = Math.abs(i);
    return 1 / (1 + Math.pow(Math.E, -i));
}

function draw() {
  background("#111");
  colorMode(HSL, 100);
  angleMode(DEGREES);

  let step = 20;
  let normalized_mouseX = (width / 2 - mouseX); // center of canvas is the zero-point now
  translate(width / 2, height / 2);
  let base_color = 17;

  if (is_dynamic) {
    base_color = mouseY / 20;
  }

  for (let i = 0; i < 35; i++) {
    let quantum = step * i;
    // fill(17 + quantum*0.4, 100, 50);
    fill(base_color + quantum * 0.4, 100, 50);
    rotate((normalized_mouseX / width) * 25, createVector(width, height));
    // rotate((normalized_mouseX / width) * 20, createVector(width, height));
    // rotate((mouseX / width) * 20, createVector(width, height));
    rect(0, 0, max(400 - 2 * quantum, 0), max(400 - 2 * quantum, 0));
  }
}

