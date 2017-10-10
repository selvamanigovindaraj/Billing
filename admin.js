$(document).ready(function(){
	$("button").click(function(){
		var foods={
			Items:$("#food").val(),
			price:$("#prize").val()
		}
		$.post("https://59da0fdfea4639001240945b.mockapi.io/foodItems",foods,function(){
			$("#food").val(""),
			$("#prize").val(""),
			$("p").text("Added successfully");
		})
	});
});