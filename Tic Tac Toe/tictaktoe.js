let cells = document.querySelectorAll(".cell");
let x = 0;
let circle;
let gameOver = false;
cells.forEach(function (cell) {
    cell.addEventListener("click", cellClicked),
        { once: true }
})

const player1 = "X";
const player2 = "O";
const winDone = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


function cellClicked(e) {
    if (gameOver === false) {
        if (e.target.textContent == "") {
            if (x % 2 == 0) {
                e.target.textContent = player1;
            } else {
                e.target.textContent = player2
            }

        }
        x++;
        const cell = e.target;
        const currentClass = circle ? player2 : player1;
        placeMarker(cell, currentClass);
        swapturns();
    }

    if (checkWon(e.target.textContent)) {
        console.log('Winner');
        alert('winner Winner Chicken Dinner');
        gameOver = true;
    }
}

function checkWon(textContent) {
    return winDone.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(textContent)
        })
    })
}

function placeMarker(cell, currentClass) {
    cell.classList.add(currentClass);
}
function swapturns() {
    circle = !circle;
}

function reset()
{
currentPlayer = 0;
player1 = new Array();
player2 = new Array();
drawBoard();
}




// / const Winner = () => {
// //     let win = false;
//     winDone.forEach(_qel => _qel.classList.add('WINNER'));
// };
// const line = grid();
// const sequence = [line[_c[0]]], _grid[_c
