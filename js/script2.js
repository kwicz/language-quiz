// Load the DOM
$(document).ready(function() {

	// Declare global variables (sorry)
	var python = 0;
	var ruby = 0;
	var swift = 0;
	var index = 1; 

	// Start the quiz
	$("#start").click(function(){
		$("#start").hide();
		$(".jumbotron").hide();
		$("#row1").removeClass("hidden");
	});

	// Get answer to question and reveal next set of questions
	$(".answer").click(function(event) {
		if (index < 5) {
		$("#row" + index).hide();
		index++;
		$("#row" + index).removeClass("hidden");
		var answer = $(this).val();
		
		// Tally up user responses
		if (answer === "python") {
			python++;
		} else if (answer === "ruby") {
			ruby++;
		} else {
			swift++;
		}
		event.preventDefault();

			// Determine result at end of quiz
		} else {
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
			$("#row" + index).hide();
			$("#result").removeClass("hidden");
			event.preventDefault();
		}
	});
	
	// Return to the beginning of the quiz
	$(".again").click(function(event){
		$("#result").hide();
	});
});
