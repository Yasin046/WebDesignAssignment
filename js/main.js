$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        name: "required",
        surname: "required",
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        phoneNumber: {
            required: true,
            digits: true
        },
      },
      // Specify validation error messages
      messages: {
        name: "Please enter your firstname",
        surname: "Please enter your lastname",
        email: "Please enter a valid email address"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
    $(document).ready(function(){  
        $("#Rbutton").click(function(){
            $("#Rbutton").hide();
            $("#Rform").fadeIn();
        });
    });
    $(document).ready(function(){  
      $("#register").click(function(){
          $("#Rbutton").hide();
          $("#Rform").fadeIn();
      });
    });
    $(document).ready(function(){  
      $("#login").click(function(){
          alert("You are logged in.")
      });
    });
});

 

  