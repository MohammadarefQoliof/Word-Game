let giftGotPlayer = document.querySelector(".giftGotPlayer")
let name1 = wordFinder[0].toUpperCase() + wordFinder.slice(1).toLowerCase();
let name2 = wordWriter[0].toUpperCase() + wordWriter.slice(1).toLowerCase();
if (wordFinder == name1){
    giftGotPlayer.innerHTML = name1;
    giftGotPlayer.style.color = localStorage.getItem(`player1Color`)
}else{
    giftGotPlayer.innerHTML = name2;
    giftGotPlayer.style.color = localStorage.getItem(`player2Color`)
}

let freeGuesses = document.querySelector(".freeGuesses")
let randomGuess = Math.floor(Math.random() * 5) + 1
freeGuesses.innerHTML = `<span class="guessNum">${randomGuess}</span>`


let btn = document.querySelector(".btn")
btn.addEventListener("click", ()=>{
    localStorage.setItem("freeGuess", randomGuess)

    window.location.href = "../HTML/playing.html"
})