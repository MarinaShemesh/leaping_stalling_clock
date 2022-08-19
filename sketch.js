console.log('flower function');


function setup() {
  createCanvas(2010, 1760);
  angleMode(DEGREES);

}

let a = 5;
let step = 25;

function draw() {



  ball(700);
}

function ball(radius) {
  console.log('frameCount:', frameCount);

  background(200, 45, 96);
  translate(width / 2, height / 2);


  for (let theta = 0; theta <= 360; theta += step) {



    fill(0);
    let ballx = radius * cos(theta);
    let bally = radius * sin(theta);

    ellipse(ballx, bally, 100, 100);

    stroke(0);
    strokeWeight(a);
    line(0, 0, ballx, bally);

    step += 0.07;

    if (frameCount == 1900) {
      background(200, 45, 96);
      step = 25;
    }
  }


}

function mousePressed() {
  save('image.png');
}