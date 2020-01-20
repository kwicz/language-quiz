
//Declare global variables (sorry)
var python = 0;
var ruby = 0;
var swift = 0;

// Tally up user responses
function calculate(response) {
	if (response === "python") {
		python++;
	}
	else if (response === "ruby") {
		ruby++;
	}
	else if (response === "swift") {
		swift++;
	}
};

// Load the DOM
$(document).ready(function() {

	// Start the quiz
	$("#start").click(function(){
		$("#start").hide();
		$("#row1").removeClass("hidden");
	});

	// Get answer to first question
	$(".question1").click(function(event){
		$("#row1").hide();
		$("#row2").removeClass("hidden");
		answer1 = $(this).val();
		calculate(answer1);
		event.preventDefault();
	});

	// Get answer to second question
	$(".question2").click(function(event){
		$("#row2").hide();
		$("#row3").removeClass("hidden");
		var answer2 = $(this).val();
		calculate(answer2);
		event.preventDefault();
	});

	// Get answer to third question
	$(".question3").click(function(event){
		$("#row3").hide();
		$("#row4").removeClass("hidden");
		var answer3 = $(this).val();
		calculate(answer3);
		event.preventDefault();
	});

	// Get answer to fourth question
	$(".question4").click(function(event){
		$("#row4").hide();
		$("#row5").removeClass("hidden");
		var answer4 = $(this).val();
		calculate(answer4);
		event.preventDefault();
	});

	// Get answer to fifth question
	$(".question5").click(function(event){
		$("#row5").hide();
		$("#row6").removeClass("hidden");
		var answer5 = $(this).val();
		calculate(answer5);
		event.preventDefault();
	});

});
