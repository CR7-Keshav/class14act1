var ball={
  x:20,
  y:200,
  r:30,
  xspeed:0,
  colour:["blue","green","gold"]
}
function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r)
  fill(ball.colour[1])
  ball.xspeed=2
  ball.x=ball.x+ball.xspeed
}