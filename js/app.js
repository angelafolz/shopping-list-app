$(document).ready(function(){

	var input = $("input[type='text']");
	var submit = $("input[type='submit']");
	var list = $(".list");

	// add item to list
	submit.click(function(){
		var new_item = input.val();		// this variable is only used in this part of the code, but would it still be better to define it globally so it isn't recreated every time an item is added to the list?
		if(new_item) {
			list.prepend($('<li>' + new_item + '<div class="actions"><div class="check"></div><div class="delete"></div><div class="star"></div></div></li>'));		// is it better to stay consistent and use "<div class=\"actions\"> ... " ?
			input.val("").removeAttr("placeholder");		// I couldn't figure out a way to only run .removeAttr("placeholder") the first time an item is added. Thoughts?
		}
		else {
			input.addClass("shake").focus();		// I couldn't get this to work as a jQuery animation instead of css animation
			setTimeout(function(){
				input.removeClass("shake");
			}, 500);
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

});
