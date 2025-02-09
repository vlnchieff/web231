/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Chris Weaver
     Date:   Jan 31 2025

     Filename: js03.js
*/

// Days of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

window.addEventListener("load", addWeekdays);

//Function to write weekday names to the calendar table
function addWeekdays() {
  let i = 0;
  let headingCells = document.getElementsByTagName("th");
  while (i < 7){
    headingCells[i].innerHTML = weekDays[i];
    i++;
  }
}

window.addEventListener("load", showGames);

function showGames() {
  for (let i = 0; i < gameDates.length; i++){
    let gameInfo = "";
    switch (gameResults[i]){
      case "W":
        gameInfo += "<p class='win'>";
        break;
      case "L":
        gameInfo += "<p class='lose'>";
        break;
      case "S":
        gameInfo += "<p class='suspended'>";
        break;
      case "P":
        gameInfo += "<p class='postponed'>";
        break;
    }

    //Open a paragraph tag
    gameInfo += "<p>";

    //Include the opponent
    gameInfo += gameOpponents[i] + "<br>";

    //Include the result and score
    gameInfo += gameResults[i] + ": (" + runsScored[i] + "-" + runsAllowed[i] + ")";

    //Close the paragraph tag
    gameInfo += "</p>";

    //write the information into a table cell
    let tableCell = document.getElementById(gameDates[i]);
    tableCell.insertAdjacentHTML("beforeEnd", gameInfo);
  }
}