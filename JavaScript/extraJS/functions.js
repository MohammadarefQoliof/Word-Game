function defineRole() {
    let random = Math.floor(Math.random() * 2);
    
    if (random === 0) {
        let wordFinder = localStorage.getItem("player1");
        let wordWriter = localStorage.getItem("player2");
        localStorage.setItem("wordFinder", wordFinder);
        localStorage.setItem("wordWriter", wordWriter);
    } else {
        let wordFinder = localStorage.getItem("player2");
        let wordWriter = localStorage.getItem("player1");
        localStorage.setItem("wordFinder", wordFinder);
        localStorage.setItem("wordWriter", wordWriter);
    }
}

function writeHp(){
    setTimeout(() => {
        let wordFinder = localStorage.getItem("wordFinder");
        let wordWriter = localStorage.getItem("wordWriter");
        let hp1 = localStorage.getItem(`${wordFinder.toUpperCase()}hp`)
        let hp2 = localStorage.getItem(`${wordWriter.toUpperCase()}hp`)
        let overlay1 = document.querySelector(".player1Overlay")
        let overlay2 = document.querySelector(".player2Overlay")
        nameHp1.innerHTML = hp1
        nameHp2.innerHTML = hp2
        overlay1.style.width = `${hp1}%`
        overlay2.style.width = `${hp2}%`
    }, 2500);
}