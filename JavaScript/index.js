let keyWords = [
    "animateDamage",
    "category",
    "damage",
    "freeGuess",
    "guessNum",
    "leftLetters",
    "player1",
    "player2",
    "player1Color",
    "player2Color",
    "quizWord",
    "wordFinder",
    "wordWriter",
    "wordFound",
    "wordNotFound",
]
for(let i = 0; i < keyWords.length; i++){
    localStorage.removeItem(keyWords[i])
}