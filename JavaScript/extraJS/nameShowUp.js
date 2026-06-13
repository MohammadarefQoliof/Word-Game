let wordFinder = localStorage.getItem("wordFinder");
let wordWriter = localStorage.getItem("wordWriter");
let hp1 = localStorage.getItem(`${wordFinder.toUpperCase()}hp`)
let hp2 = localStorage.getItem(`${wordWriter.toUpperCase()}hp`)

let player1HPname = document.querySelector(".player1");
let player2HPname = document.querySelector(".player2");
let nameHp1 = document.querySelector(".hp")
let nameHp2 = document.querySelector(".hp2")
let overlay1 = document.querySelector(".player1Overlay")
let overlay2 = document.querySelector(".player2Overlay")
player1HPname.innerHTML = wordFinder.toUpperCase();
player2HPname.innerHTML = wordWriter.toUpperCase();
nameHp1.innerHTML = hp1
nameHp2.innerHTML = hp2
overlay1.style.width = `${hp1}%`
overlay2.style.width = `${hp2}%`