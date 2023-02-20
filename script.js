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
    // const IndCell = document.querySelector(".cells");
    const p = targetID.querySelector(':first-child');

    console.log("p is " + p);
    // console.log(currentUser);
    // console.log(targetID);
      
     if (currentUser == "" && p == null) {
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
        else if (currentUser == playerCrosses && p == null) {
            var markerSign = document.createTextNode(currentUser.marker);
            para.appendChild(markerSign);
            para.setAttribute("id",currentUser.marker);
            targetID.appendChild(para);
            currentUser = playerNoughts;
            console.log(currentUser);
        }
        else if (currentUser == playerNoughts && p == null) {
            var markerSign = document.createTextNode(currentUser.marker);  
            para.appendChild(markerSign);
            para.setAttribute("id",currentUser.marker);
            targetID.appendChild(para);
            currentUser = playerCrosses;
            console.log(currentUser);
         }
        else if (p != null) {
            console.log("Skip");
        }

        }
            

);

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
    displayController(gridID);})
