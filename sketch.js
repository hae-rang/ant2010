function setup() {
createCanvas(windowWidth, windowHeight);
background(0,0,0);
}
function draw() {
if (mouseIsPressed) {
var size = random(90, 100);
ellipse(mouseX, mouseY, size, size);
}
}