// Return Exploration
// This app contains a controllable square using the WASD keys. The position of the square's top-left corner is at (xLoc,yLoc). Currently the square can leave the map. Use the constrain function to stop this from happening. You must not make any changes to the constrain function itself.

let wDown = false;
let aDown = false;
let sDown = false;
let dDown = false;
let xLoc = 200;
let yLoc = 200;

document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
  if (event.code == "KeyD") dDown = true;
  if (event.code == "KeyW") wDown = true;
  if (event.code == "KeyA") aDown = true;
  if (event.code == "KeyS") sDown = true;
}

function keyupHandler(event) {
  if (event.code == "KeyD") dDown = false;
  if (event.code == "KeyW") wDown = false;
  if (event.code == "KeyA") aDown = false;
  if (event.code == "KeyS") sDown = false;
}

requestAnimationFrame(draw);

function draw() {
  fill("white");
  rect(0, 0, cnv.width, cnv.height, "fill");

  fill("blue");
  rect(xLoc, yLoc, 10, 10, "fill");

  // Add your changes here
  //----------------------

  //----------------------
  if (wDown) {
    yLoc -= 10;
  }

  if (aDown) {
    xLoc -= 10;
  }

  if (sDown) {
    yLoc += 10;
  }

  if (dDown) {
    xLoc += 10;
  }

  xLoc = constrain(xLoc, 0, 390);
  yLoc = constrain(yLoc, 0, 390);
  requestAnimationFrame(draw);
}

// Don't make any changes here
function constrain(input, low, high) {
  var output;
  if (input < low) {
    output = low;
  } else if (input > high) {
    output = high;
  } else {
    output = input;
  }
  return output;
}
