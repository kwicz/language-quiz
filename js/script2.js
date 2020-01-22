
// Declare global variables (sorry)
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
		$(".jumbotron").hide();
		$("#row1").removeClass("hidden");
	});

	// Get answer to question and reveal next set of questions
	var index = 1; 
	$(".answer").click(function(event) {
		if (index < 5) {
		$("#row" + index).hide();
		index++;
		$("#row" + index).removeClass("hidden");
		var answer = $(this).val();
		calculate(answer);
		event.preventDefault();
		} else {
			
			// Determine result at end of quiz
			if (python > ruby && python > swift || python == ruby && python > swift) {
				$("ul").append('<li>Python</li>');
				$("ul").append('<li><a href="https://www.learnpython.org/" target="_blank">Get Started Today!</a></li>');
				$("ul").append('<li><a href="https://www.learnpython.org/" target="_blank"><img src="img/python.jpeg"></a></li>');
			} else if (ruby > python && ruby > swift || ruby == swift && ruby > python) {
				$("ul").append('<li>Ruby</li>');
				$("ul").append('<li><a href="https://www.ruby-lang.org/en/documentation/quickstart/" target="_blank">Get Started Today!</a></li>');
				$("ul").append('<li><a href="https://www.ruby-lang.org/en/documentation/quickstart/" target="_blank"><img src="img/ruby.jpeg"></a></li>');
			} else if (swift > python && swift > ruby || swift == python && swift > ruby) {
				$("ul").append('<li>Swift</li>');
				$("ul").append('<li><a href="https://swift.org/getting-started/#installing-swift" target="_blank">Get Started Today!</a></li>');
				$("ul").append('<li><a href="https://swift.org/getting-started/#installing-swift" target="_blank"><img src="img/swift.jpeg"></a></li>');
			}
			
			// Display answer
			$("#result").removeClass("hidden");
			event.preventDefault();
		}
	});
	
	// Return to the beginning of the quiz
	$(".again").click(function(event){
		$("#result").hide();
	});
});
