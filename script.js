const gridCells = document.querySelector(".gameBoard");
const gameBoardGrid = document.querySelector("gameBoard");
var currentUser = "";

const gameBoard = (() => {
    const grid = ['TL','TM','TR','ML','MM','MR','BL','BM','BR'];
    for (var i = 0; i < 9; i++) {
        newCell = document.createElement('div');
        newCell.setAttribute("id",grid[i]);
        newCell.className = "cells";
        gridCells.appendChild(newCell);
    }
});

const displayController = ((targetID) => {
    const para = document.createElement('p');
    const markerPlacement = targetID.querySelector(':first-child');

     if (markerPlacement == null) {
        if (currentUser == "") {
            currentUser = playerCrosses;
            console.log(currentUser)
            console.log(currentUser.marker);
            var markerSign = document.createTextNode(currentUser.marker);
            para.appendChild(markerSign);
            para.setAttribute("id",currentUser.marker);
            targetID.appendChild(para);
            currentUser = playerNoughts;
            console.log(currentUser);
        }
        else if (currentUser == playerCrosses) {
            var markerSign = document.createTextNode(currentUser.marker);
            para.appendChild(markerSign);
            para.setAttribute("id",currentUser.marker);
            targetID.appendChild(para);
            currentUser = playerNoughts;
            console.log(currentUser);
        }
        else if (currentUser == playerNoughts) {
            var markerSign = document.createTextNode(currentUser.marker);  
            para.appendChild(markerSign);
            para.setAttribute("id",currentUser.marker);
            targetID.appendChild(para);
            currentUser = playerCrosses;
            console.log(currentUser);
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
    }
})
