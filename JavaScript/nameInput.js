let btn = document.querySelector(".btn")
btn.addEventListener("click", () => {
    let name1 = document.querySelector(".player1Input").value
    let name2 = document.querySelector(".player2Input").value
    localStorage.setItem("player1", name1)
    localStorage.setItem("player2", name2)
    localStorage.setItem(`${name1}Color`, "rgb(109, 218, 255)")
    localStorage.setItem(`${name2}Color`, "#F53D99")
    defineRole();
    
    window.location.href = "../HTML/startingPage.html"
})