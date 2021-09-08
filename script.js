let clicks = 0
let clickPower = 1
let amountPowerfulClicks = 0

let price1 = 15
let multiplier1 = 1.45 * price1
price1 = multiplier1

function text() {
  clicks = clicks + clickPower + amountPowerfulClicks
  let line = "You have " + clicks.toFixed(1) + " clicks"
  document.getElementById("clickTime").innerHTML = line
}

function shopToggle() {
  let x = document.getElementById("shopText");
  if (x.innerHTML === "") {
    x.innerHTML = "1. Powerful clicks - Price = " + price1.toFixed(1) + " - Increases purchasing power by 1";
  } else {
    x.innerHTML = "";
  }
}

function buy1() {
  if (clicks < price1) {
    document.getElementById("error").innerText = "User does not have enough clicks! He has " + clicks + " clicks! He needs " + price1.toFixed(1) + " clicks!"
  } else {
    clicks = clicks - price1.toFixed(0)
    line = "You have " + clicks.toFixed(1) + " clicks"
    multiplier1 = 1.10 * price1
    price1 = multiplier1
    shopToggle()
    shopToggle()
    amountPowerfulClicks = amountPowerfulClicks + 1
    document.getElementById("clickTime").innerHTML = line
    document.getElementById("up1").innerHTML = "You have " + amountPowerfulClicks + " 'Powerful clicks' Upgrades"
  }
}
