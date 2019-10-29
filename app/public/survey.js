
$("#submit").on("click", function(event){
    event.preventDefault();

//Form Validation
function validateFunction(){
    var isValid = true;
    $(".form-control").each(function(){
        if($(this).val() === ""){
            isValid = false;
        }
    });
    $(".chosen-select").each(function(){
        if($(this).val() === ""){
            isValid = false;
        }
    });
    return isValid
}
if(validateFunction()){
    // Create an object for user data
    
    var userData = {
        name: $('#name').val(),
        photo: $('#photo').val(),
        score: [
            $('#question1').val(),
            $('#question2').val(),
            $('#question3').val(),
            $('#question4').val(),
            $('#question5').val(),
            $('#question6').val(),
            $('#question7').val(),
            $('#question8').val(),
            $('#question9').val(),
            $('#question10').val(),
        ]
    }
$.post("/api/friends", userData, function(data){

    // Grab the result from the AJAX post so that the best match's name and photo are displayed.
    $("#match-name").text(data.name);
    $("#match-img").attr("src", data.photo);

    // Show the modal with the best match
    $("#results-modal").modal("toggle");

});
}else {
    alert("Please fill out all fields before submitting!");
    }
})