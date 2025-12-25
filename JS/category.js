let button = document.getElementById("submit")
let radios = document.querySelectorAll('input[type="radio"]')
radios = [...radios]

button.addEventListener("click", ()=>{
    let selectingCategory = document.querySelector('input[name="category"]:checked')
    console.log(selectingCategory.value);
    
    if(selectingCategory.value == "ownCategory"){
        window.location.href = "../HTML/ownCategory.html"
    }
    else if(selectingCategory){
        localStorage.setItem("category", selectingCategory.value)
        window.location.href = "../HTML/play.html"
    }else{
        alert("1 category should be selected")
    }
})