

document.getElementById("tickets-grid-container").addEventListener("click", function () {

	let svg = Array.from(document.getElementsByTagName("path"));
	let tickets = Array.from(document.getElementsByName("checkbox-ticket"));

	// Funciona para resetear. No borrar
	tickets_values = [];
	tickets.forEach(t => {
		if (t.checked == true) {
			tickets_values.push(t.value);
			svg[tickets.indexOf(t)].setAttribute("fill", "url(#gold)");
		} else {
			svg[tickets.indexOf(t)].setAttribute("fill", "url(#silver)");
		}
	});

	inputExtra1.value = tickets_values.join("-");
	inputAmount.value = tickets_values.length * ticket_price;

	spanAmount.textContent = "$ "+inputAmount.value; 

});