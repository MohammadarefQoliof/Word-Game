let category = localStorage.getItem("category");
let categoryTitle = document.querySelector(".categoryText");
categoryTitle.innerText = category;

let letterNum = document.querySelector(".numOfLetters")
let wordInput = document.querySelector(".wordInput");
let guessNumInput = document.querySelector(".guessNumInput");
let btn = document.querySelector(".btn");

guessNumInput.addEventListener("input", ()=>{
    if (guessNumInput.value < 0){
        guessNumInput.value = 1
    }else if(guessNumInput.value > 30){
        guessNumInput.value = 30
    }
})

if(wordInput.value == ""){
    btn.classList.add("disabled")
}
wordInput.addEventListener("input", ()=>{
    letterNum.innerText = wordInput.value.length;
    if(wordInput.value == ""){
        btn.classList.add("disabled")
    }else{
        btn.classList.remove("disabled")
    }
});

let flag = false;
let errorP = document.querySelector(".errorP");
let errorDiv = document.querySelector(".errorDiv");

btn.addEventListener("click", ()=>{
    if (wordInput.value != "" && guessNumInput.value != "") {
        for (let i = 0; i < wordInput.value.length; i++) {
            if (wordInput.value[i] >= "A" && wordInput.value[i] <= "Z" || wordInput.value[i] >= "a" && wordInput.value[i] <= "z") {
                flag = true;
            }else{
                errorP.innerText = "Only letters are allowed in the word";
                errorDiv.style.display = "flex";
                errorDiv.style.animation = "appear 0.3s ease forwards";
                setTimeout(() => {
                    errorDiv.style.animation = "disappear 0.5s ease forwards";
                }, 2000)
                flag = false;
                break;
            }
        }
    }else if(guessNumInput.value == ""){
        errorP.innerText = "Guess number must be between 1 and 30";
        errorDiv.style.display = "flex";
        errorDiv.style.animation = "appear 0.3s ease forwards";
        setTimeout(() => {
            errorDiv.style.animation = "disappear 0.5s ease forwards";
        }, 2000)
        flag = false;
    }
    if (flag) {
        localStorage.setItem("quizWord", wordInput.value);
        localStorage.setItem("guessNum", guessNumInput.value);
        window.location.href = "../HTML/randomGuess.html";
    }
});
