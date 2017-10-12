function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
}
function draw() {

  background(255, 255, 255);
  randomSeed(0);

  var x, y;
  var delta = map(mouseX, 0, windowWidth, 10, 100);
  var th = map(mouseY, 0, windowHeight, 10, 100);

  for (y=0; y<windowHeight; y+=delta) {
    for (x=0; x<windowWidth; x+=delta) {
      var r = random(0, 1);
      if (r<0.5){
        stroke(0);
        strokeWeight(5);
        line(x+delta, y, x, y+delta);
      } else {
      stroke(200, 0, 230, 177);
      strokeWeight(th);
      line(x-delta, y, x, y+delta);
     }
    }
  }
}
  