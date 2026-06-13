let btn = document.querySelector(".btn")
btn.addEventListener("click", () => {
    let inputName1 = document.querySelector(".player1Input").value
    let inputName2 = document.querySelector(".player2Input").value
    let name1 = inputName1[0].toUpperCase() + inputName1.slice(1).toLowerCase();
    let name2 = inputName2[0].toUpperCase() + inputName2.slice(1).toLowerCase();

    localStorage.setItem("player1", name1)
    localStorage.setItem("player2", name2)
    localStorage.setItem(`${inputName1.toUpperCase()}hp`, "100")
    localStorage.setItem(`${inputName2.toUpperCase()}hp`, "100")
    localStorage.setItem(`player1Color`, "rgb(109, 218, 255)")
    localStorage.setItem(`player2Color`, "#F53D99")
    defineRole();
    
    window.location.href = "../HTML/startingPage.html"
})