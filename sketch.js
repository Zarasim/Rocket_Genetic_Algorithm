var population;
var lifespan = 300;
var lifeP;
var count = 0;
var target;
var maxforce = 0.1;
var maxspeed = 2;
var popsize = 100;

var rx = 100;
var ry = 150;
var rw = 200;
var rh = 10;

function setup() {

  createCanvas(400, 300);
  population = new Population();
  lifeP = createP();
  target = createVector(width / 2, 50);
}


function draw() {

  background(0);
  population.run();
  lifeP.html('Time: ' + count);

  if (count == lifespan) {
    population.evaluate();
    population.selection();
    count = 0;
  }

  fill(255);
  rect(rx, ry, rw, rh);

  count++;
  ellipse(target.x, target.y, 16, 16);
}
