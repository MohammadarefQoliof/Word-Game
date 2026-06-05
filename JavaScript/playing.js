let categoryText = document.querySelector(".category")
categoryText.textContent = `CATEGORY: ${localStorage.getItem("category")}`

let quizWord = localStorage.getItem("quizWord")
let guessSec = document.querySelector(".guessSec")
let letters = document.createElement("div")
let lettersList = localStorage.getItem("lettersList")

letters.classList.add("letters")

for (let i = 1; i < quizWord.length + 1; i++){
    let questionCard = document.createElement("div")
    let questionCardMark = document.createElement("div")
    
    questionCard.classList.add("letter", `letter${i}`)
    questionCardMark.classList.add("questionMarkBg")

    questionCard.append(questionCardMark)
    letters.append(questionCard)
    guessSec.before(letters)
}

let freeGuesses = localStorage.getItem("freeGuess")
let guesses = localStorage.getItem("guessNum")
let freeGuessesText = document.querySelector(".freeGuesses")
let guessesText = document.querySelector(".guessesLeft")

freeGuessesText.innerHTML = `<div class="giftIcon"></div> ${freeGuesses} Free Guesses`
guessesText.innerHTML = `<div class="lightningIcon"></div> ${guesses} Guesses Left`

let letterInput = document.querySelector(".letterInput").value
let wordInput = document.querySelector(".wordInput").value