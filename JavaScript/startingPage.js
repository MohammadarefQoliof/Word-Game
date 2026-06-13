let wordFinderName = localStorage.getItem("wordFinder")
let wordWriterName = localStorage.getItem("wordWriter")
let player1 = localStorage.getItem("player1")
let player2 = localStorage.getItem("player2")
let playerName1 = document.querySelector(".playerName");
let playerName2 = document.querySelector(".playerName2");
let name1 = wordFinderName[0].toUpperCase() + wordFinderName.slice(1).toLowerCase();
let name2 = wordWriterName[0].toUpperCase() + wordWriterName.slice(1).toLowerCase();

if (player1 == name1){
    playerName1.style.color = localStorage.getItem(`player1Color`)
    playerName2.style.color = localStorage.getItem(`player2Color`)
    playerName1.innerHTML = name1;
    playerName2.innerHTML = name2;
}else{
    playerName1.style.color = localStorage.getItem(`player2Color`)
    playerName2.style.color = localStorage.getItem(`player1Color`)
    playerName1.innerHTML = name2;
    playerName2.innerHTML = name1;
}

let playerNameSpan = document.querySelector(".playerNameSpan");
playerNameSpan.innerHTML = name1;

let btnPlayerName = document.querySelector(".btnPlayerName");
btnPlayerName.innerHTML = name1.toUpperCase();

if(localStorage.getItem("animateDamage") == "true"){
    let body = document.querySelector("body")
    let damageBg = document.createElement("div")
    let damageText = document.createElement("div")
    let givenDamage = document.createElement("div")
    let hpText = document.createElement("div")

    damageText.innerHTML = `<div class="damageIcon"></div>Damage`
    hpText.textContent = "HP"
    givenDamage.textContent = `-${localStorage.getItem("damage")}`

    givenDamage.classList.add("givenDamage")
    damageBg.classList.add("damageBg")
    damageText.classList.add("damageText")
    hpText.classList.add("hpText")

    if(localStorage.getItem("wordFound") == "true"){
        if (wordWriterName == player2){
            damageBg.style.animation = "giveDamageRight 2.5s ease forwards"
            let wordWriterHp = Number(localStorage.getItem(`${wordWriterName.toUpperCase()}hp`))
            wordWriterHp -= Number(localStorage.getItem("damage"))
            localStorage.setItem(`${wordWriterName.toUpperCase()}hp`, wordWriterHp)
            writeHp()
        }else{
            damageBg.style.animation = "giveDamageLeft 2.5s ease forwards"
            let wordFinderHp = Number(localStorage.getItem(`${wordFinderName.toUpperCase()}hp`))
            wordFinderHp -= Number(localStorage.getItem("damage"))
            localStorage.setItem(`${wordFinderName.toUpperCase()}hp`, wordFinderHp)
            writeHp()
        }
        localStorage.setItem("wordFound", false)
    }else if(localStorage.getItem("wordNotFound") == "true"){
        if (wordWriterName == player2){
            damageBg.style.animation = "giveDamageLeft 2.5s ease forwards"
            let wordFinderHp = Number(localStorage.getItem(`${wordFinderName.toUpperCase()}hp`))
            wordFinderHp -= Number(localStorage.getItem("damage"))
            localStorage.setItem(`${wordFinderName.toUpperCase()}hp`, wordFinderHp)
        }else{
            damageBg.style.animation = "giveDamageRight 2.5s ease forwards"
            let wordWriterHp = Number(localStorage.getItem(`${wordWriterName.toUpperCase()}hp`))
            wordWriterHp -= Number(localStorage.getItem("damage"))
            localStorage.setItem(`${wordWriterName.toUpperCase()}hp`, wordWriterHp)
        }
        writeHp()
        localStorage.setItem("wordNotFound", false)
    }
    localStorage.setItem("animateDamage", false)
    localStorage.setItem("damage", 0)
    
    damageBg.append(damageText, givenDamage, hpText)
    body.append(damageBg)
}

let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    window.location.href = "../HTML/category.html";
});
// if(!localStorage.getItem("animateDamage")){
// }


