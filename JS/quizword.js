let button = document.querySelector("#submit_button")
button.addEventListener("click", ()=>{
    let input = document.querySelector("#quizWord")
    
    input.classList.remove("shakeAnimate", "warn")

    if(input.value == ""){
        input.classList.add("warn", "shakeAnimate")
    }else{
        quizWord = input.value.toLowerCase()
        localStorage.setItem("quiz word", quizWord)
        window.location.href = "../HTML/play.html"
    }
})