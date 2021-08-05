let clicks = 0


function text() {
  let line = "You have " + clicks + " clicks"
  document.getElementById("ctbut").innerHTML = line
  document.getElementById("clickTime").innerHTML = line
  clicks = clicks + 1
}

