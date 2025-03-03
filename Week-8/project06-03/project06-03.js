"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Chris Weaver
      Date:   March 2, 2025

      Filename: project06-03.js
*/

document.getElementById("useShip");

// Copy shipping address to billing address
useShip.addEventListener("click", copyShippingToBilling);

function copyShippingToBilling() {
    if (useShip.checked) {
        document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
        document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
        document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
        document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
        document.getElementById("cityBill").value = document.getElementById("cityShip").value;
        document.getElementById("countryBill").value = document.getElementById("countryShip").value;
        document.getElementById("codeBill").value = document.getElementById("codeShip").value;

        document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
    }
  }
    const formElements = document.querySelectorAll("input[type=text]");

    const fieldCount = formElements.length;

    const errorBox = document.getElementById("errorBox");

    for (let element of formElements) {
        element.addEventListener("invalid", showValidationError);
      }

      function showValidationError(evt) {
        // Prevent the browser's default handling of invalid input
        evt.preventDefault();

        // Set the errorBox text content to display the error message
        errorBox.textContent = "Complete all highlighted fields, PLease";
    }

