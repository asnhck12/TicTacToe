const gridCells = document.querySelector(".gameBoard");
const newGame = document.getElementById("newGame");
const gameBoardGrid = document.querySelector("gameBoard");
const resultMessage = document.getElementById('result');
var currentUser = "";
var gameOver = false;

const gameBoard = (() => {
    const grid = ['TL','TM','TR','ML','MM','MR','BL','BM','BR'];
    for (var i = 0; i < 9; i++) {
        newCell = document.createElement('div');
        newCell.setAttribute("id",grid[i]);
        newCell.className = "cells";
        gridCells.appendChild(newCell);
    }
});

function displayResult(result) {
  if (result === 'tie') {
    resultMessage.innerText = "It's a tie!";
  } else {
    resultMessage.innerText = `${result} wins!`;
  }
}


function threeInARow() {
    const ids = ['TL','TM','TR','ML','MM','MR','BL','BM','BR'];
    const cellValues = {};
    
    for (let id of ids) {
        const cell = document.getElementById(id);
        cellValues[id] = cell.textContent;
    }

    if (cellValues.TL === cellValues.TM && cellValues.TM === cellValues.TR && cellValues.TR !== '') {
        displayResult(cellValues.TL);
        gameOver = true;
      } else if (cellValues.ML === cellValues.MM && cellValues.MM === cellValues.MR && cellValues.MR !== '') {
        displayResult(cellValues.ML);
        gameOver = true;
      } else if (cellValues.BL === cellValues.BM && cellValues.BM === cellValues.BR && cellValues.BR !== '') {
        displayResult(cellValues.BL);
        gameOver = true;
      } else if (cellValues.TL === cellValues.ML && cellValues.ML === cellValues.BL && cellValues.BL !== '') {
        displayResult(cellValues.TL);
        gameOver = true;
      } else if (cellValues.TM === cellValues.MM && cellValues.MM === cellValues.BM && cellValues.BM !== '') {
        displayResult(cellValues.TM);
        gameOver = true;
      } else if (cellValues.TR === cellValues.MR && cellValues.MR === cellValues.BR && cellValues.BR !== '') {
        displayResult(cellValues.TR);
        gameOver = true;
      } else if (cellValues.TL === cellValues.MM && cellValues.MM === cellValues.BR && cellValues.BR !== '') {
        displayResult(cellValues.TL);
        gameOver = true;
      } else if (cellValues.TR === cellValues.MM && cellValues.MM === cellValues.BL && cellValues.BL !== '') {
        displayResult(cellValues.TR);
        gameOver = true;
      } else if (Object.values(cellValues).every(value => value !== '')) {
        displayResult('tie');
        gameOver = true;
      }
};

const clearBoard = () => {
    const cells = document.querySelectorAll('.cells');
    for (let cell of cells) {
        cell.textContent = '';
        resultMessage.innerText = '';

    }
    gameOver = false;
}

const displayController = ((targetID) => {
    if (gameOver) {
        return;
    }

    const para = document.createElement('p');
    const markerPlacement = targetID.querySelector(':first-child');

    if (markerPlacement == null) {
        if (currentUser == "") {
            currentUser = playerCrosses;
            var markerSign = document.createTextNode(currentUser.marker);
            para.appendChild(markerSign);
            para.setAttribute("id",currentUser.marker);
            targetID.appendChild(para);
            currentUser = playerNoughts;
        }
        else if (currentUser == playerCrosses) {
            var markerSign = document.createTextNode(currentUser.marker);
            para.appendChild(markerSign);
            para.setAttribute("id",currentUser.marker);
            targetID.appendChild(para);
            currentUser = playerNoughts;
        }
        else if (currentUser == playerNoughts) {
            var markerSign = document.createTextNode(currentUser.marker);  
            para.appendChild(markerSign);
            para.setAttribute("id",currentUser.marker);
            targetID.appendChild(para);
            currentUser = playerCrosses;
        }}
        }
);

const players = (user, marker) => {
    return {user, marker};
};

const playerNoughts = players('User', 'O');
const playerCrosses = players('CPU', 'X');

gameBoard();

gridCells.addEventListener('click', (e) =>  {
    var targetCell = e.target.classList.contains('cells');
    if (targetCell == true) {
    targetID = e.target.id;
    gridID = document.getElementById(targetID);
    displayController(gridID);
    threeInARow();
    }
});

newGame.addEventListener('click', () => {
  clearBoard();
});

