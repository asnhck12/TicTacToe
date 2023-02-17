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

const displayController = ((players, targetID) => {
    const para = document.createElement('p');
    const IndCell = document.querySelector(".cells");
    const p = targetID.querySelector(':first-child');
   
    if (p !== null) {
        console.log("Not Empty")}
    
    else {
        var markerSign = document.createTextNode(players.marker);  
        para.appendChild(markerSign);
        para.setAttribute("id",players.marker);
        targetID.appendChild(para);  
        console.log(p);  
    };
    });

const players = (user, marker) => {
    console.log('i am ' + user +' using ' + marker);
    return {user, marker};
};

const playerNoughts = players('User', 'O');
const playerCrosses = players('CPU', 'X');
gameBoard();

gridCells.addEventListener('click', (e) =>  {
    targetID = e.target.id;
    gridID = document.getElementById(targetID);
    if (currentUser == "" || currentUser == playerNoughts) {
    currentUser = playerCrosses;
    displayController(currentUser, gridID);}
    else if (currentUser == playerCrosses) {
        currentUser = playerNoughts;
        displayController(currentUser, gridID);
    }
});