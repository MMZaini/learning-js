let clicks = 0
let clickamo = 1
let amo1 = 0

let price1 = 15
let multiplier1 = price1 / 4 + price1
price1 = multiplier1

function text() {
  clicks = clicks + clickamo
  let line = "You have " + clicks + " clicks"
  document.getElementById("clickTime").innerHTML = line
}

function shopToggle() {
  let x = document.getElementById("shopText");
  if (x.innerHTML === "") {
    x.innerHTML = "1. Powerful Clicks - Price = " + price1 + " - Increases purchasing power by 1";
  } else {
    x.innerHTML = "";
  }
}

function buy1() {
  if (clicks < price1) {
    console.log("User does not have enough clicks! He has " + clicks + " clicks! He needs " + price1 + " clicks!")
   }
    else {
    clicks = clicks - price1
    line = "You have " + clicks + " clicks"
    multiplier1 = 1.25 * price1
    price1 = multiplier1
    shopToggle()
    shopToggle()
    amo1 = amo1 + 1
    clickamo = clickamo + 1
    document.getElementById("clickTime").innerHTML = line
    document.getElementById("up1").innerHTML = "You have " + amo1 + " 'Powerful Clicks' Upgrades"


  }

}