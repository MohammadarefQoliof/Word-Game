let button = document.getElementById("submit_button")
let category = document.getElementById("category")
button.addEventListener("click", ()=>{
    if(category.value != ""){
        localStorage.setItem("category", category.value)
        window.location.href = "../HTML/play.html"
    }else{
        alert("Category can't be empty")
    }
})