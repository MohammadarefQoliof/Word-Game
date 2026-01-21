let categoryImg = document.querySelector("#img");
let gamecategory = localStorage.getItem("category") + ".png";
categoryImg.style.background = `url(../IMAGES/${gamecategory})`;
categoryImg.style.backgroundSize = "cover";
categoryImg.style.backgroundPosition = "center";
categoryImg.style.backgroundRepeat = "no-repeat";

let letters = document.querySelectorAll("#letters div");
for(let i = 0; i < letters.length; i++){
    letters[i].style.width = "100px"
    letters[i].style.height = "100px"
    letters[i].style.background = `url(../IMAGES/questionMark.png)`;
    letters[i].style.backgroundSize = "cover";
    letters[i].style.backgroundPosition = "center";
    letters[i].style.backgroundRepeat = "no-repeat";
    letters[i].style.backgroundColor = "white"
}

let buttons = document.getElementById("buttons");
buttons.addEventListener("click", (e)=>{
    if(e.target.tagName !== "BUTTON"){
        return;
    }

    
})