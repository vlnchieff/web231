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