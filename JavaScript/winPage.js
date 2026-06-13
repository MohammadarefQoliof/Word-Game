let text = document.querySelector(".winner");
let wordFinderName = localStorage.getItem("wordFinder")
let wordWriterName = localStorage.getItem("wordWriter")
let hpBar1 = document.querySelector(".player1HPbar")
let hpBar2 = document.querySelector(".player2HPbar")
if(localStorage.getItem(`${wordFinderName.toUpperCase()}hp`) == "0"){
    hpBar1.classList.add("foundBar")
    hpBar2.classList.remove("foundBar")
    let winnerName = wordWriterName
    text.innerHTML = `${winnerName} WINS`
}else{
    hpBar2.classList.add("foundBar")
    hpBar1.classList.remove("foundBar")
    let winnerName = wordFinderName
    text.innerHTML = `${winnerName} WINS`
}

let redHeart = document.querySelector(".heartBlue")
redHeart.style.backgroundImage = "url('../assets/redHeart.png')"

let card = document.querySelector(".card");

let fontSize = 1;
text.style.fontSize = `1px`;

let cardOffset = card.offsetWidth - 70

while (text.offsetWidth < cardOffset) {
    fontSize++;
    text.style.fontSize = `${fontSize}px`;
}

text.style.fontSize = `${fontSize - 1}px`;

let name1Text = document.querySelector(".name1")
let name2Text = document.querySelector(".name2")
let hp1Text = document.querySelector(".realHp1")
let hp2Text = document.querySelector(".realHp2")
name1Text.textContent = wordFinderName
name2Text.textContent = wordWriterName
hp1Text.textContent = `${localStorage.getItem(`${wordFinderName.toUpperCase()}hp`)} HP`
hp2Text.textContent = `${localStorage.getItem(`${wordWriterName.toUpperCase()}hp`)} HP`


let btn = document.querySelector(".btn")
btn.addEventListener("click", ()=>{
    localStorage.removeItem(`${wordFinderName.toUpperCase()}hp`)
    localStorage.removeItem(`${wordWriterName.toUpperCase()}hp`)
    window.location.href = "../index.html"
})