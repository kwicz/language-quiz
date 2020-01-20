
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

	// Get answer to first question and show next
	$(".question1").click(function(event){
		$("#row1").hide();
		$("#row2").removeClass("hidden");
		answer1 = $(this).val();
		calculate(answer1);
		event.preventDefault();
	});

	// Get answer to second question and show next
	$(".question2").click(function(event){
		$("#row2").hide();
		$("#row3").removeClass("hidden");
		var answer2 = $(this).val();
		calculate(answer2);
		event.preventDefault();
	});

	// Get answer to third question and show next
	$(".question3").click(function(event){
		$("#row3").hide();
		$("#row4").removeClass("hidden");
		var answer3 = $(this).val();
		calculate(answer3);
		event.preventDefault();
	});

	// Get answer to fourth question and show next
	$(".question4").click(function(event){
		$("#row4").hide();
		$("#row5").removeClass("hidden");
		var answer4 = $(this).val();
		calculate(answer4);
		event.preventDefault();
	});

	// Get answer to fifth question and show result
	$(".question5").click(function(event){
		$("#row5").hide();
		var answer5 = $(this).val();
		calculate(answer5);
		// Determine result
		if (python > ruby && python > swift) {
			$("ul").append('<li>Python</li>');
			$("ul").append('<li><a href="https://www.learnpython.org/">Get Started!</a></li>');
		}
		else if (ruby > python && ruby > swift) {
			result = "Ruby";
		}
		else if (swift > python && swift > ruby) {
			result = "Swift";
		}
		else if (python == swift || python == ruby) {
			result = "Python";
		}
		else if (ruby == swift) {
			result = "Ruby";
		}
		// Display answer
		$("#result").removeClass("hidden");
		event.preventDefault();
	});

});
