// YOUR CODE HERE
// Event listener for form submission
$("#sendEmail").click(function(){
  var firstName = $("#firstName").val();
  var email = $("#email").val();
  var message = $("#message").val();
  if (firstName && email && message) {
    submitForm();
  } else {
    alert("I'm sorry, some information is missing, please complete the form and resend");
  }
});
//   // Save the first name as a variable
// var firstName = $("#firstName").val();
// var email = $("#email").val();
// var message = $("#message").val();

//   // Clear all fields in form
// $(".form-control").val("");

// // if the user enters first name, email, and message
// // show message has been sent
// // if any input is missing
// // show inputs needed to complete
// if (firstName && email && message) {
//     // Set HTML of .modal-body
// $(".modal-body").html("Thank you, " + firstName + ".  Your message has been sent!");
// }
// else {
// $(".modal-body").html("Sorry, your form is not complete!");
// }
// });

function submitForm() {
  var formData = $("#contact-form").serialize();
  // console.log( $('#test').val() );
  console.log( formData );
  $.post("https://api.formbucket.com/f/buk_FUb5LCfdQtWdd8vYVeuJ6I5s", formData).done(function(data){
      // if everything is good
      if(data.id){
        alert('Thank you for reaching out, I will be in touch soon!');
        $(".form-control").val("");
        //if something is wrong
      }else{
        alert("I'm sorry, some information is missing, please complete the form and resend");
      }
  });
}