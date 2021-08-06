let Clicks = 0
let clickamo = 1
let AmountPowerfulClicks = 0

let price1 = 15
let multiplier1 = 1.45 * price1
price1 = multiplier1

function text() {
  Clicks = Clicks + clickamo
  let line = "You have " + Clicks.toFixed(1) + " Clicks"
  document.getElementById("clickTime").innerHTML = line
}

function shopToggle() {
  let x = document.getElementById("shopText");
  if (x.innerHTML === "") {
    x.innerHTML = "1. Powerful Clicks - Price = " + price1.toFixed(1) + " - Increases purchasing power by 1";
  } else {
    x.innerHTML = "";
  }
}

function buy1() {
  if (Clicks < price1)
    console.log("User does not have enough Clicks! He has " + Clicks + " Clicks! He needs " + price1.toFixed(1) + " Clicks!")

  else {
    Clicks = Clicks - price1
    line = "You have " + Clicks.toFixed(1) + " Clicks"
    multiplier1 = 1.45 * price1
    price1 = multiplier1
    shopToggle()
    shopToggle()
    AmountPowerfulClicks = AmountPowerfulClicks + 1
    clickamo = clickamo + 1
    document.getElementById("clickTime").innerHTML = line
    document.getElementById("up1").innerHTML = "You have " + AmountPowerfulClicks + " 'Powerful Clicks' Upgrades"
  }
}
