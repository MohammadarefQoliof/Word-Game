let wordFinder = localStorage.getItem("wordFinder");
let wordWriter = localStorage.getItem("wordWriter");

let player1HPname = document.querySelector(".player1");
let player2HPname = document.querySelector(".player2");
player1HPname.innerHTML = wordFinder.toUpperCase();
player2HPname.innerHTML = wordWriter.toUpperCase();