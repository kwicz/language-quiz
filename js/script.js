$(document).ready(function() {

	$("#start").click(function(){
		$("#start").hide();
		$("#row1").removeClass("hidden");
	});

	$(".question1").click(function(event){
		$("#row1").hide();
		$("#row2").removeClass("hidden");
		var answer1 = $(this).val();
		console.log ("answer 1: " + answer1);
		event.preventDefault();
	});

		$(".question2").click(function(event){
		$("#row2").hide();
		$("#row3").removeClass("hidden");
		var answer2 = $(this).val();
		console.log ("answer 2: " + answer2);
		event.preventDefault();
	});

		$(".question3").click(function(event){
		$("#row3").hide();
		$("#row4").removeClass("hidden");
		var answer3 = $(this).val();
		console.log ("answer 3: " + answer3);
		event.preventDefault();
	});

		$(".question4").click(function(event){
		$("#row4").hide();
		$("#row5").removeClass("hidden");
		var answer4 = $(this).val();
		console.log ("answer 4: " + answer4);
		event.preventDefault();
	});

		$(".question5").click(function(event){
		$("#row5").hide();
		$("#row6").removeClass("hidden");
		var answer5 = $(this).val();
		console.log ("answer 5: " + answer5);
		event.preventDefault();
	});

});