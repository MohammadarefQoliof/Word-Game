let giftGotPlayer = document.querySelector(".giftGotPlayer")
let player1 = localStorage.getItem("player1")
let player2 = localStorage.getItem("player2")
let name1 = wordFinder[0].toUpperCase() + wordFinder.slice(1).toLowerCase();
let name2 = wordWriter[0].toUpperCase() + wordWriter.slice(1).toLowerCase();
if (player1 == name2){
    giftGotPlayer.innerHTML = name1;
    giftGotPlayer.style.color = localStorage.getItem(`player1Color`)
}else{
    giftGotPlayer.innerHTML = name2;
    giftGotPlayer.style.color = localStorage.getItem(`player2Color`)
}

let freeGuesses = document.querySelector(".freeGuesses")
let freeGuessNum = document.querySelector(".freeGuessNum")
let randomGuess = Math.floor(Math.random() * 5) + 1
freeGuesses.innerHTML = `<span class="guessNum">${randomGuess}</span>`
freeGuessNum.innerHTML = randomGuess


let btn = document.querySelector(".btn")
btn.addEventListener("click", ()=>{
    localStorage.setItem("freeGuess", randomGuess)
    window.location.href = "../HTML/playing.html"
})