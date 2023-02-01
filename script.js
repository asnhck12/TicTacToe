const gridCells = document.querySelector(".gameBoard");
console.log(gridCells);
const gameBoardGrid = document.querySelector("gameBoard");


//generate a 3 by 3 grid


const gameBoard = (() => {
    const grid = ['TL','TM','TR','ML','MM','MR','BL','BM','BR'];
    for (var i = 0; i < 9; i++) {
        console.log(gridCells);
        newCell = document.createElement('div');
        newCell.setAttribute("id",grid[i]);
        newCell.className = "cells";
        gridCells.appendChild(newCell);
    }

});

const displayController = (() => {
//whatever section is selected, use players.marker

})

const players = (user, marker) => {
    console.log('i am ' + user +' using ' + marker);
    return {user, marker};
};

const playerNoughts = players('User', 'Noughts');
const playerCrosses = players('CPU', 'Crosses');
gameBoard();