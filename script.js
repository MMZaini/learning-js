let clicks = 0
let clickamo = 1
let amo1 = 0
let clickcur = 0

function text() {
  let line = "You have " + clicks + " clicks"
  clickcur = clicks
  clicks = clicks + clickamo
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
  if (clickcur < 15) {
   console.log("User does not have enough clicks! He has " + clickcur + " Clicks")
  }


  if (clickcur >= 15) {
   clickcur = clicks - 16
   clicks = clicks - 16
   line = "You have " + clickcur + " clicks"
   // clickamo = clickamo + 1
   amo1 = amo1 + 1
   document.getElementById("clickTime").innerHTML = line
   document.getElementById("up1").innerHTML = "You have " + amo1 + " 'Powerful Clicks' Upgrades"
   }

}