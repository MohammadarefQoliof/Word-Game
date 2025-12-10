let button = document.getElementById("submit_button")
button.addEventListener("click", ()=>{    
    let player1 = document.getElementById("P1")
    let player2 = document.getElementById("P2")
    let points = document.getElementById("points")
    let pointValue = points.value
    let P1 = player1.value
    let P2 = player2.value
    
    points.classList.remove("warn")
    player1.classList.remove("warn")
    player2.classList.remove("warn")
    const azRegex = /[^A-Za-zÇçƏəĞğİıÖöŞşÜü]/
    
    if (/\d/.test(P1) || /\d/.test(P2) || azRegex.test(P1) || azRegex.test(P2)){
        let warn_text = document.getElementById("text")
        player1.classList.add("warn")
        player2.classList.add("warn")
        warn_text.innerHTML = "Letters only allowed"
    } else if (pointValue == "") {
        let warn_text = document.getElementById("text")
        points.classList.add("warn")
        warn_text.innerHTML = "The inputs can't be empty"
    } else if (pointValue > 10) {
        let warn_text = document.getElementById("text")
        points.classList.add("warn")
        warn_text.innerHTML = "Point cannot be more than 10"
    }else {
        P1 = P1[0].toUpperCase() + P1.slice(1).toLowerCase();
        P2 = P2[0].toUpperCase() + P2.slice(1).toLowerCase();
        localStorage.setItem("player1", P1)
        localStorage.setItem("player2", P2)
        localStorage.setItem("points", pointValue)
        window.location.href = "../HTML/broadcast.html"
    }
})
