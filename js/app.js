$(document).ready(function(){

	var input = $("input[type='text']");
	var submit = $("input[type='submit']");
	var list = $(".list");

	// add item to list
	submit.click(function(){
		var new_item = input.val();
		if(new_item) {
			list.prepend($('<li>' + new_item + '<div class="actions"><div class="check"></div><div class="delete"></div><div class="star"></div></div></li>'));
			input.val("").removeAttr("placeholder");

			// detect touch screen, check etc stay instead of showing on hover
			if (Modernizr.touch) {
				list.find(".actions").show();
			}
		}
		else {
			input.effect("shake", "slow").focus();
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

});
