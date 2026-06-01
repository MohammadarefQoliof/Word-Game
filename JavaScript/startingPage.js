let playerName1 = document.querySelector(".playerName");
let playerName2 = document.querySelector(".playerName2");
let name1 = wordFinder[0].toUpperCase() + wordFinder.slice(1).toLowerCase();
let name2 = wordWriter[0].toUpperCase() + wordWriter.slice(1).toLowerCase();
playerName1.innerHTML = name1;
playerName2.innerHTML = name2;

let playerNameSpan = document.querySelector(".playerNameSpan");
playerNameSpan.innerHTML = name1;

let btnPlayerName = document.querySelector(".btnPlayerName");
btnPlayerName.innerHTML = name1;

let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    window.location.href = "../HTML/category.html";
});