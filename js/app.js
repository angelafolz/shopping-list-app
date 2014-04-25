$(document).ready(function(){

	var input = $("input[type='text']");
	var submit = $("input[type='submit']");
	var list = $(".list");

	// add item to list
	submit.click(function(){
		var new_item = input.val();
		if(new_item) {
			list.prepend($('<li>' + new_item + '<div class="actions"><div class="check"></div><div class="delete"></div><div class="star"></div></div></li>'));
			input.val("").removeAttr("placeholder");		// I couldn't figure out a way to only run .removeAttr("placeholder") the first time an item is added. Thoughts? A: could track with variable
		}
		else {
			input.effect("shake", "slow").focus();		// brief red background? sandwiching .animate({backgroundColor: "#FFB2B2"}, 50) and .animate({backgroundColor: "#FFF"}, 50) around .effect(...) makes the red last too long A: try dequeue?
		}
	});

	input.keypress(function(event){
		if (event.which == 13){
			submit.click();
		}
	});

	// check and uncheck item
	list.on("click", ".check", function(){
		$(this).closest("li").toggleClass("checked");
	});

	// star and unstar item
	list.on("click", ".star", function(){
		$(this).closest("li").toggleClass("starred");
	});

	// remove item from list
	list.on("click", ".delete", function(){
		$(this).closest("li").remove();
	});

	// make list sortable by dragging items
	list.sortable();

	// detect touch screen, check etc stay instead of hover. goes here
	if (Modernizr.touch) {
		alert("Touch Screen");
	} else {
		alert("No Touch Screen");
	}

});
