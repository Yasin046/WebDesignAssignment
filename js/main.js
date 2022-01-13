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
    $(document).ready(function(){  
      $(".game-box").click(function(){
        window.open("https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Fff%2FHand_in_Shithead.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FShithead_(card_game)&tbnid=cZ4Ca7QoJUjjlM&vet=12ahUKEwiepI3Frqz1AhWmwAIHHbndCWoQMygAegUIARDYAQ..i&docid=V6FyPiKYUv9U-M&w=3024&h=4032&itg=1&q=card%20game&ved=2ahUKEwiepI3Frqz1AhWmwAIHHbndCWoQMygAegUIARDYAQ",'_blank');
      });
    });
});



 

  