/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Chris Weaver
      Date:   01/17/2025

      Filename: js02.js
*/

// declare global constants
const EMP_COST = 100;
const BOOK_COST = 350;
const REPRO_COST = 1250;
const TRAVEL_COST = 2;

// setup the form when the page loads
window.addEventListener("load", setupForm);

// setup the forms default values
function setupForm() {
  document.getElementById("photoNum").value = 1;
  document.getElementById("photoHrs").value = 2;
  document.getElementById("makeBook").checked = false;
  document.getElementById("photoRights").checked = false;
  document.getElementById("photoDist").value = 0;

  getEstimate();

  // Add event handlers for the form
  document.getElementById("photoNum").onchange = getEstimate;
  document.getElementById("photoHrs").onchange = getEstimate;
  document.getElementById("makeBook").onchange = getEstimate;
  document.getElementById("photoRights").onchange = getEstimate;
  document.getElementById("photoDist").onchange = getEstimate;
}

//estimate the total cost of the service
function getEstimate(){
  let totalCost = 0;
  let photographers = document.getElementById("photoNum").value;
  let hours = document.getElementById("photoHrs").value;
  let distance = document.getElementById("photoDist").value;
  let buyBook = document.getElementById("makeBook").checked;
  let buyRights = document.getElementById("photoRights").checked;


  // Add the cost of the photographers by the hours
  totalCost += photographers * hours * EMP_COST;

  // Add the cost of the distance per photographer per mile
  totalCost += photographers * distance * TRAVEL_COST;

  // Add the cost of the book if purchased
  totalCost += buyBook ? BOOK_COST : 0;

  // Add the cost of the photo rights if purchased
  totalCost += buyRights ? REPRO_COST : 0;

  //Display the total cost of the estimate
  document.getElementById("estimate").innerHTML = "$" + totalCost;
}