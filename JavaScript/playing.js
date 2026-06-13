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

let letterInput = document.querySelector(".letterInput")
let wordInput = document.querySelector(".wordInput")
let letterValue = letterInput.value
let wordValue = wordInput.value
let btn = document.querySelector(".btn")
let wordBtn = document.querySelector(".wordBtn")
if (letterValue == "" && wordValue == ""){
    btn.classList.add("disabledLetter")
    wordBtn.classList.add("disabledWord")
}else{
    btn.classList.remove("disabledLetter")
    wordBtn.classList.remove("disabledWord")
}

letterInput.addEventListener("input", ()=>{
    let letterValue = letterInput.value
    letterInput.value = letterValue.toUpperCase()
    if (letterValue == ""){
        btn.classList.add("disabledLetter")
    }else{
        btn.classList.remove("disabledLetter")
    }
})
wordInput.addEventListener("input", ()=>{
    let wordValue = wordInput.value
    wordInput.value = wordValue.toUpperCase()
    if (wordValue == ""){
        wordBtn.classList.add("disabledWord")
    }else{
        wordBtn.classList.remove("disabledWord")
    }
})

let giftGuess = localStorage.getItem("freeGuess")
if (giftGuess == 0){
    let damage = document.querySelector(".pendingDamage")
    let damagePend = localStorage.getItem("damage") || 0
    freeGuessesText.style.display = "none"
    damage.innerHTML = `<div class="heartIcon"></div> ${damagePend} HP pending`
    damage.style.display = "flex"
}
let usedLetters = []
btn.addEventListener("click", ()=>{
    letterValue = letterInput.value
    let leftLetters = localStorage.getItem("leftLetters")
    
    if (letterValue == ""){
        btn.classList.add("disabledLetter")
    }else{
        if (!usedLetters.includes(letterValue)){
            btn.classList.remove("disabledLetter")
            if (quizWord.includes(letterValue)){
                for (let i = 0; i < quizWord.length; i++){
                    if (quizWord[i] == letterValue){
                        let letterIndex = document.querySelector(`.letter${i+1}`)
                        leftLetters -= 1
                        localStorage.setItem("leftLetters", leftLetters)
                        letterIndex.textContent = letterValue
                        letterIndex.classList.add("found")
                    }
                }
            }else{
                let giftGuess = localStorage.getItem("freeGuess")
                let guessNum = localStorage.getItem("guessNum")
                
                if (giftGuess > 0){
                    giftGuess -= 1
                    localStorage.setItem("freeGuess", giftGuess)
                    freeGuessesText.innerHTML = `<div class="giftIcon"></div> ${giftGuess} Free Guesses`
                    if (giftGuess == 0){
                        freeGuessesText.style.display = "none"
                    }
                }else{
                    guessNum -= 1
                    localStorage.setItem("guessNum", guessNum)
                    guessesText.innerHTML = `<div class="lightningIcon"></div> ${guessNum} Guesses Left`
                    let damagePend = Number(localStorage.getItem("damage")) || 0
                    let damage = document.querySelector(".pendingDamage")
                    damage.style.animation = "animateScale 0.4s ease forwards"
                    setTimeout(() => {
                        damage.style.animation = "none"
                    }, 400);
                    damagePend += 5
                    localStorage.setItem("damage", damagePend)
                    damage.style.display = "flex"
                    damage.innerHTML = `<div class="heartIcon"></div> ${damagePend} HP pending`
                    if (guessNum == 0){
                        let player1 = localStorage.getItem("player1")
                        let player2 = localStorage.getItem("player2")
                        localStorage.setItem("player1", player2)
                        localStorage.setItem("player2", player1)
                        localStorage.setItem("animateDamage", true)
                        localStorage.setItem("wordNotFound", true)
                        window.location.href = "../HTML/startingPage.html"
                    }
                }
            }
            usedLetters.push(letterValue)
        }
    }
    btn.classList.add("disabledLetter")
    letterInput.value = ""
    if (leftLetters == 0){
        let player1 = localStorage.getItem("player1")
        let player2 = localStorage.getItem("player2")
        localStorage.setItem("player1", player2)
        localStorage.setItem("player2", player1)
        localStorage.setItem("animateDamage", true)
        localStorage.setItem("wordFound", true)
        if (localStorage.getItem("damage") == 0 || localStorage.getItem("damage") == null){
            localStorage.setItem("damage", "5")
        }
        window.location.href = "../HTML/startingPage.html"
    }
})
wordBtn.addEventListener("click", ()=>{
    let player1 = localStorage.getItem("player1")
    let player2 = localStorage.getItem("player2")
    localStorage.setItem("player1", player2)
    localStorage.setItem("player2", player1)
    if (localStorage.getItem("damage") == 0 || localStorage.getItem("damage") == null){
        localStorage.setItem("damage", "5")
    }
    if (quizWord == wordInput.value){
        localStorage.setItem("animateDamage", true)
        localStorage.setItem("wordFound", true)
        window.location.href = "../HTML/startingPage.html"
    }else{
        localStorage.setItem("animateDamage", true)
        localStorage.setItem("wordNotFound", true)
        window.location.href = "../HTML/startingPage.html"
    }
})