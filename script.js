console.log("Tic Tac Toe")
let audioturn = new Audio("click.mp3")
let gmover = false
let p1 = prompt("Please enter name of player 1", "Player1");
let p2 = prompt("Please enter name of player 2", "Player2");

if (p1 === null || "") {
    p1 = "Player 1"
}
if (p2 === null || "") {
    p2 = "Player 2"
}
if (p1 === p2) {
    p2 = p2 + '1';
}
let turn = "X"
let pname = p1
let s1 = 0
let s2 = 0
let alt = false
document.getElementsByClassName("playern")[0].innerText = p1;
document.getElementsByClassName("playern")[1].innerText = p2;
document.getElementsByClassName("info")[0].innerText = "Turn for " + pname + " (" + turn + ")";

const changeturn = () => { //to change turn
    return turn === "X" ? "O" : "X"
}

const checkwin = () => { //if a person wins
    let bt = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    if (!gmover) {
        wins.forEach(e => {
            if (bt[e[1]].innerText !== "" && bt[e[0]].innerText === bt[e[1]].innerText && bt[e[1]].innerText === bt[e[2]].innerText) {
                pname = bt[e[1]].innerText === "X" ? p1 : p2;
                document.getElementsByClassName("info")[0].innerText = pname + " Won"
                if (bt[e[1]].innerText === "X") {
                    s1 = s1 + 1;
                    document.getElementsByClassName("playersc")[0].innerText = s1;
                } else {
                    s2 = s2 + 1;
                    document.getElementsByClassName("playersc")[1].innerText = s2;
                }

                if (s1 > s2) {
                    document.getElementsByClassName("playersc")[0].style.background = "rgb(98, 245, 171)";
                    document.getElementsByClassName("playersc")[1].style.background = "";
                } else if (s1 < s2) {
                    document.getElementsByClassName("playersc")[1].style.background = "rgb(98, 245, 171)";
                    document.getElementsByClassName("playersc")[0].style.background = "";
                } else {
                    document.getElementsByClassName("playersc")[1].style.background = "";
                    document.getElementsByClassName("playersc")[0].style.background = "";
                }
                gmover = true
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "260px";
                document.getElementsByClassName("box")[e[0]].style.background = "rgb(205 176 233)";
                document.getElementsByClassName("box")[e[1]].style.background = "rgb(205 176 233)";
                document.getElementsByClassName("box")[e[2]].style.background = "rgb(205 176 233)";
            }
        })
    }
}

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn();
            pname = turn === "X" ? p1 : p2;
            audioturn.play();
            checkwin();
            if (!gmover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + pname + " (" + turn + ")";
            }

        }
    })
})

reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    })
    turn = alt ? "X" : "O";
    alt = !alt;
    pname = turn === "X" ? p1 : p2;
    gmover = false
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + pname + " (" + turn + ")";
    let b = document.getElementsByClassName("box");
    Array.from(b).forEach(element => {
        element.style.background = "";
    })
})

newgame.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    })

    p1 = prompt("Please enter name of player 1", "Player1");
    p2 = prompt("Please enter name of player 2", "Player2");
    turn = "X"
    if (p1 === null || "") {
        p1 = "Player 1"
    }
    if (p2 === null || "") {
        p2 = "Player 2"
    }
    if (p1 === p2) {
        p2 = p2 + '1';
    }
    pname = p1
    alt = false

    document.getElementsByClassName("playern")[0].innerText = p1;
    document.getElementsByClassName("playern")[1].innerText = p2;

    s1 = 0
    s2 = 0
    document.getElementsByClassName("playersc")[0].innerText = s1;
    document.getElementsByClassName("playersc")[1].innerText = s2;
    document.getElementsByClassName("playersc")[1].style.background = "";
    document.getElementsByClassName("playersc")[0].style.background = "";
    gmover = false

    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + pname + " (" + turn + ")";
    let b = document.getElementsByClassName("box");
    Array.from(b).forEach(element => {
        element.style.background = "";
    })
})