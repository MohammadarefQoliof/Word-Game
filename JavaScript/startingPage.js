let playerName1 = document.querySelector(".playerName");
let playerName2 = document.querySelector(".playerName2");
let name1 = wordFinder[0].toUpperCase() + wordFinder.slice(1).toLowerCase();
let name2 = wordWriter[0].toUpperCase() + wordWriter.slice(1).toLowerCase();

if (wordFinder == name1){
    playerName1.style.color = localStorage.getItem(`player1Color`)
    playerName2.style.color = localStorage.getItem(`player2Color`)
    playerName1.innerHTML = name1;
    playerName2.innerHTML = name2;
}else{
    playerName1.style.color = localStorage.getItem(`player2Color`)
    playerName2.style.color = localStorage.getItem(`player1Color`)
    playerName1.innerHTML = name2;
    playerName2.innerHTML = name1;
}

let playerNameSpan = document.querySelector(".playerNameSpan");
playerNameSpan.innerHTML = name1;

let btnPlayerName = document.querySelector(".btnPlayerName");
btnPlayerName.innerHTML = name1;

if(localStorage.getItem("animate")){
    let body = document.querySelector("body")
    let damageBg = document.createElement("div")
    let damageText = document.createElement("div")
    let givenDamage = document.createElement("div")
    let hpText = document.createElement("div")

    damageText.innerHTML = `<div class="damageIcon"></div>Damage`
    hpText.textContent = "HP"
    givenDamage.textContent = `-${localStorage.getItem("damage")}`

    givenDamage.classList.add("givenDamage")
    damageBg.classList.add("damageBg")
    damageText.classList.add("damageText")
    hpText.classList.add("hpText")

    damageBg.append(damageText, givenDamage, hpText)
    body.append(damageBg)
}

let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    window.location.href = "../HTML/category.html";
});