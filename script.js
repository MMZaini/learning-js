let clicks = 0
let clickamo = 1
let amo1 = 0

function text() {
  clicks = clicks + clickamo
  let line = "You have " + clicks + " clicks"
  document.getElementById("clickTime").innerHTML = line
}

function shopToggle() {
  var x = document.getElementById("shopText");
  if (x.innerHTML === "") {
    x.innerHTML = "1. Powerful Clicks - Price = 15 Clicks - Increases purchasing power by 1";
  } else {
    x.innerHTML = "";
  }
}

function buy1() {
  if (clicks < 15) {
    console.log("User does not have enough clicks! He has " + clicks + " Clicks")
  } else {
    clicks = clicks - 15
    line = "You have " + clicks + " clicks"
    amo1 = amo1 + 1
    clickamo = clickamo + 1
    document.getElementById("clickTime").innerHTML = line
    document.getElementById("up1").innerHTML = "You have " + amo1 + " 'Powerful Clicks' Upgrades"
  }

}