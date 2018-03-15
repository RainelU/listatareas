let array = [];
let array2 = [];
let array3 = [];

	const BUTTON = document.getElementById("button-add");
	BUTTON.addEventListener('click', valor);

	function valor(e) {
		const INPUT = document.getElementById("input-add").value;
		const UL = document.getElementById("pendientes");

			array.push(INPUT);
				UL.innerHTML = "";

				for (let i = 0; i < array.length ; i++) {
						document.getElementById("pendientes").innerHTML += "<li style='font-size:30px; text-align:center;'>" + array[i] + "</li>";
						array[i];
					}
				
		console.log(INPUT);
	}