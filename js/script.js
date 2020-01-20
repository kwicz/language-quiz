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

});