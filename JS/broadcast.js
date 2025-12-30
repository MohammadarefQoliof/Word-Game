let player1 = localStorage.getItem("player 1")
let player2 = localStorage.getItem("player 2")
let a = Number(localStorage.getItem("a"))
let b = Number(localStorage.getItem("b"))
let c = Number(localStorage.getItem("c"))
let writer = document.getElementById("P1")
let finder = document.getElementById("P2")
let P1_point = document.getElementById("p1_point")
let P2_point = document.getElementById("p2_point")
let player1points = localStorage.getItem("player 1 points")
let player2points = localStorage.getItem("player 2 points")
let P1_finder = player1 + " - Word finder"
let P1_writer = player1 + " - Word writer"
let P2_finder = player2 + " - Word finder"
let P2_writer = player2 + " - Word writer"
let P1_points = player1 + " - " + player1points
let P2_points = player2 + " - " + player2points

switch (c) {
    case 0:
        a = 15
        b = 5
        writer.innerHTML = P1_writer
        finder.innerHTML = P2_finder
        P1_point.innerHTML = P1_points
        P2_point.innerHTML = P2_points
        break;
    case 1:
        a = 5
        b = 15
        writer.innerHTML = P1_finder
        finder.innerHTML = P2_writer
        P1_point.innerHTML = P1_points
        P2_point.innerHTML = P2_points
        break
    case 2:
        a = 15
        b = 5
        writer.innerHTML = P1_writer
        finder.innerHTML = P2_finder
        P1_point.innerHTML = P1_points
        P2_point.innerHTML = P2_points
        break
    case 3:
        a = 5
        b = 15
        writer.innerHTML = P1_finder
        finder.innerHTML = P2_writer
        P1_point.innerHTML = P1_points
        P2_point.innerHTML = P2_points
        break
    case 4:
        a = 15
        b = 5
        writer.innerHTML = P1_writer
        finder.innerHTML = P2_finder
        P1_point.innerHTML = P1_points
        P2_point.innerHTML = P2_points
        break
    case 5:
        a = 5
        b = 15
        writer.innerHTML = P1_finder
        finder.innerHTML = P2_writer
        P1_point.innerHTML = P1_points
        P2_point.innerHTML = P2_points
        break
    case 6:
        a = 15
        b = 5
        writer.innerHTML = P1_writer
        finder.innerHTML = P2_finder
        P1_point.innerHTML = P1_points
        P2_point.innerHTML = P2_points
        break
    case 7:
        a = 5
        b = 15
        writer.innerHTML = P1_finder
        finder.innerHTML = P2_writer
        P1_point.innerHTML = P1_points
        P2_point.innerHTML = P2_points
        break
    case 8:
        a = 15
        b = 5
        writer.innerHTML = P1_writer
        finder.innerHTML = P2_finder
        P1_point.innerHTML = P1_points
        P2_point.innerHTML = P2_points
        break
    case 9:
        a = 5
        b = 15
        writer.innerHTML = P1_finder
        finder.innerHTML = P2_writer
        P1_point.innerHTML = P1_points
        P2_point.innerHTML = P2_points
        break
    case 10:
        a = 15
        b = 5
        writer.innerHTML = P1_writer
        finder.innerHTML = P2_finder
        P1_point.innerHTML = P1_points
        P2_point.innerHTML = P2_points
        break
    case 11:
        c -= 11
        break
}
localStorage.setItem("a", a);
localStorage.setItem("b", b);
localStorage.setItem("c", c);