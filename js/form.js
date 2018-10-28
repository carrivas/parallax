// YOUR CODE HERE
// Event listener for form submission
$("#sendEmail").click( function(){

  // Save the first name as a variable
var firstName = $("#firstName").val();
var email = $("#email").val();
var message = $("#message").val();

  // Clear all fields in form
$(".form-control").val("");

// if the user enters first name, email, and message
// show message has been sent
// if any input is missing
// show inputs needed to complete
if (firstName) {
    // Set HTML of .modal-body
$(".modal-body").html("Thank you, " + firstName + ".  Your message has been sent!");
}
else {
$(".modal-body").html("Sorry, your form is not complete!");
}
});