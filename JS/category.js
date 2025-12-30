let button = document.getElementById("submit")
let radios = document.querySelectorAll('input[type="radio"]')
radios = [...radios]

button.addEventListener("click", ()=>{
    let selectingCategory = document.querySelector('input[name="category"]:checked')

    if(!selectingCategory){
        alert("1 category should be selected")
    }else if(selectingCategory){
        selectedCategory = selectingCategory.value.toLowerCase()
        localStorage.setItem("category", selectedCategory)
        window.location.href = "../HTML/quizword.html"
    }else{
        window.location.href = "../HTML/ownCategory.html"
    }
})