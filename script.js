$("td").on("click", function() {
	$(this).fadeOut()
});

$("#myList").submit(function(event) {
	event.preventDefault();
	$(this).children("input:text").each(function(index, elem) {
		var value = $(elem).val()
		$("table").append(
			"<tr>" +
				"<td>" + value + ' <input type="button" value="Done!">' + "</td>" +
			"</tr>");
		$(elem).val("");
	});
}); 

