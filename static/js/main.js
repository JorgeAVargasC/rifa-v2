// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })

document.getElementById("tickets-grid-container").addEventListener("click", function () {

	var svg = Array.from(document.getElementsByTagName("path"));
	var tickets = Array.from(document.getElementsByName("checkbox-ticket"));

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