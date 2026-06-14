let category = document.querySelectorAll(".category")
let card = document.querySelector(".card")
let customCategory = document.querySelector(".customCategory")
let btn = document.querySelector(".btn")
let categoryValue;

for(let i = 0; i < category.length; i++){

    category[i].addEventListener("click", ()=>{
        for(let j = 0; j < category.length; j++){
            category[j].classList.remove("categorySelected")
        }

        category[i].classList.add("categorySelected")

        categoryValue = category[i].textContent
        console.log(categoryValue);
        
        if(categoryValue == "OTHERS"){
            customCategory.value = ""
            card.style.height = "98%"
            customCategory.style.display = "block"
            customCategory.style.animation = "appear 0.4s forwards"
            btn.classList.add("btnNotWork")
            
            
            customCategory.addEventListener("input", ()=>{
                if(customCategory.value != ""){
                    btn.classList.remove("btnNotWork")
                }else{
                    btn.classList.add("btnNotWork")
                }
            })
        }else{
            card.style.height = "85%"
            customCategory.style.animation = "disappear 0.4s forwards"
            btn.classList.remove("btnNotWork")
            customCategory.value = "UNDEFINED"
        }
    })
}

btn.addEventListener("click", ()=>{
    if(customCategory.value != "" && customCategory.style.display == "block"){
        localStorage.setItem("category", customCategory.value.toUpperCase())
        window.location.href = "../HTML/quizWord.html"
    }else if(customCategory.value == "" && customCategory.style.display == "block"){
        customCategory.style.animation = "shake 0.4s forwards"
        setTimeout(()=>{
            customCategory.style.animation = "none"
        }, 400)
    }else{
        localStorage.setItem("category", categoryValue)
        if(localStorage.getItem("category") != "undefined"){
            window.location.href = "../HTML/quizWord.html"
        }
    }
})