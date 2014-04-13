$(document).ready(function(){

	// add item to list
	$("input[type='submit']").click(function(){
		$(".list").prepend($('<li>' + $('#additem').val() + '<div class="actions"><div class="check"></div><div class="delete"></div><div class="star"></div></div></li>'));
		$("#additem").val("");
	})
	.one("click", function(){
		$("#additem").removeAttr("placeholder");
	});

	// check and uncheck item
	$(".list").on("click", ".check", function(){
		$(this).closest("li").toggleClass("checked");
	});

	// star and unstar item
	$(".list").on("click", ".star", function(){
		$(this).closest("li").toggleClass("starred");
	});

	// remove item from list
	$(".list").on("click", ".delete", function(){
		$(this).closest("li").remove();
	});

});

