//const asssasin = ["Zed"]
//const support = ["Soraka"]
//const mage = ["Ahri"]
//const tank = ["Ornn"]
//const carry = ["Jinx"]
//const fighter = ["Sett"]
var champ = ['asssasin', 'support', 'mage', 'tank', 'carry', 'fighter'];
var randomwho1 = Math.floor(Math.random() * champ.length);
var p1 = champ[randomwho1];
var randomwho2 = Math.floor(Math.random() * champ.length);
var p2 = champ[randomwho2];

document.querySelector(".dice1").setAttribute("src", "images/" + p1 + ".png");

document.querySelector(".dice2").setAttribute("src", "images/" + p2 + ".png");

if ((p1 == 'asssasin') && ((p2 == 'support') || (p2 == 'carry') || (p2 == 'mage'))) {
  document.querySelector("h1").innerText = "ผู้เล่น 1 ชนะ"
} else if (((p1 == 'support') || (p1 == 'carry') || (p1 == 'mage')) && (p2 == 'asssasin')) {
  document.querySelector("h1").innerText = "ผู้เล่นที่ 2 ชนะ"
} else if ((p1 == 'tank') && ((p2 == 'support') || (p2 == 'carry') || (p2 == 'asssasin'))) {
    document.querySelector("h1").innerText = "ผู้เล่น 1 ชนะ"
} else if ((p2 == 'tank') && ((p1 == 'support') || (p1 == 'carry') || (p1 == 'asssasin'))) {
    document.querySelector("h1").innerText = "ผู้เล่น 2 ชนะ"
} else if ((p1 == 'mage') && ((p2 == 'tank') || (p2 == 'carry') || (p2 == 'fighter'))) {
    document.querySelector("h1").innerText = "ผู้เล่น 1 ชนะ"
} else if ((p2 == 'mage') && ((p1 == 'tank') || (p1 == 'carry') || (p1 == 'fighter'))) {
    document.querySelector("h1").innerText = "ผู้เล่น 2 ชนะ"
} else if ((p1 == 'carry') && ((p2 == 'support') || (p2 == 'fighter'))) {
    document.querySelector("h1").innerText = "ผู้เล่น 1 ชนะ"
} else if ((p2 == 'carry') && ((p1 == 'support') || (p1 == 'fighter'))) {
    document.querySelector("h1").innerText = "ผู้เล่น 2 ชนะ"
} else if ((p1 == 'fighter') && ((p2 == 'asssasin') || (p2 == 'tank') || (p2 == 'support'))) {
    document.querySelector("h1").innerText = "ผู้เล่น 1 ชนะ"
}  else if ((p2 == 'fighter') && ((p1 == 'asssasin') || (p1 == 'tank') || (p1 == 'support'))) {
    document.querySelector("h1").innerText = "ผู้เล่น 2 ชนะ"
} else {
  document.querySelector("h1").innerText = "เสมอ"
}
//else document.querySelector("h1").innerText = "ผู้เล่น 2 ชนะ";
