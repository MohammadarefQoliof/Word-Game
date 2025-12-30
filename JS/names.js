let button = document.getElementById("submit_button")
button.addEventListener("click", ()=>{    
    let player1 = document.getElementById("P1")
    let player2 = document.getElementById("P2")
    let points = document.getElementById("points")
    let pointValue = points.value
    let P1 = player1.value
    let P2 = player2.value
    
    points.classList.remove("warn", "shakeAnimate")
    player1.classList.remove("warn", "shakeAnimate")
    player2.classList.remove("warn", "shakeAnimate")
    
    if(P1 == ""){
        let warn_text = document.getElementById("text")
        player1.classList.add("warn", "shakeAnimate")
        warn_text.innerHTML = "Inputs cannot be empty!"
    }else if(P2 == ""){
        let warn_text = document.getElementById("text")
        player2.classList.add("warn", "shakeAnimate")
        warn_text.innerHTML = "Inputs cannot be empty!"
    }else if(pointValue == ""){
        let warn_text = document.getElementById("text")
        points.classList.add("warn", "shakeAnimate")
        warn_text.innerHTML = "Inputs cannot be empty!"
    }else if(pointValue > 10){
        let warn_text = document.getElementById("text")
        points.classList.add("warn", "shakeAnimate")
        warn_text.innerHTML = "Points cannot be more than 10!"
    }
    else {
        P1 = P1[0].toUpperCase() + P1.slice(1).toLowerCase();
        P2 = P2[0].toUpperCase() + P2.slice(1).toLowerCase();
        localStorage.setItem("player1", P1)
        localStorage.setItem("player2", P2)
        localStorage.setItem("points", pointValue)
        window.location.href = "../HTML/broadcast.html"
    }
})