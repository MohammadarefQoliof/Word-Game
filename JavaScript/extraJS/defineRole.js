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