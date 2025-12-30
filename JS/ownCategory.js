let button = document.getElementById("submit_button")
button.addEventListener("click", ()=>{
    let category = document.getElementById("category")

    category.classList.remove("warn", "shakeAnimate")
    
    if(category.value != ""){
        categoryValue = category.value.toLowerCase()
        localStorage.setItem("category", categoryValue)
        window.location.href = "../HTML/play.html"
    }else{
        category.classList.add("warn", "shakeAnimate")
    }
})