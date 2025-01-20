/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Chris Weaver
      Date:   January 17, 2025

      Filename: project02-02.js
*/


function verifyForm() {
    // Variables to store form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;


    // Operator to check if all fields are filled in
    (name && email && phone) ? window.alert("Thank You!") : window.alert("Please Fill in All Fields");

}

// Event listener to call verifyForm function
document.getElementById("submit").addEventListener("click", verifyForm);
