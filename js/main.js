let array = [];
let array2 = [];
let array3 = [];
		
const UL = document.getElementById("pendientes");
const UL2 = document.getElementById("realizando");
const UL3 = document.getElementById("realizadas");
const BUTTON = document.getElementById("button-add");
const CLOSE = document.getElementById("modal");

let modal = "<div>" + "<div class='modal-add' style='display:block;'>" + "<div class='modal-o'>" + 
"<h2>No puedes ejecutar el INPUT" + "<h2> a menos que sea de 1 a 20 dígitos...</h2>"
+ "<h2> Ingresalo o no podrás acceder y añadir tareas.</h2>" + "</h2>" +
"<button class='button'>CLOSE &times</button>" + "</div>" + "</div>" + "</div>";

let modal2 = "<div>" + "<div class='modal-add' style='display:none;'>" + "<div class='modal-o'>" + 
"<h2>No puedes ejecutar el INPUT" + "<h2> a menos que sea de 1 a 15 dígitos...</h2>"
+ "<h2> Ingresalo o no podrás acceder y añadir tareas.</h2>" + "</h2>" +
"<button class='button'>CLOSE &times</button>" + "</div>" + "</div>" + "</div>";


	BUTTON.addEventListener('click', valor);

	function valor(e) {
		const INPUT = document.getElementById("input-add").value;
			array.push(INPUT);
				UL.innerHTML = "";

				for (let i = 0; i < array.length ; i++) {
						document.getElementById("pendientes").innerHTML += "<li class='li-array'>" + array[i] 
						+ "</li>";
						
						if (INPUT === "" || INPUT.length >= 21) {
							document.getElementById("modal").innerHTML = modal;
							array.pop(INPUT);
							UL.innerHTML = "";
							
						}
								array[i];

						UL.addEventListener('click', añade);

						function añade(e) {
							array2.push(array[i]);
							UL2.innerHTML = "";

							array.pop(array2[i]);

							for (let i = 0; i < array2.length; i++) {

								UL.innerHTML = "";
								UL2.innerHTML = "";

								UL2.innerHTML += "<li class='li-array'>" + array2[i] + "</li>";

								array2[i];
							
							}
						}
						
						UL2.addEventListener('click', añade2);

						function añade2(e) {
							array3.push(array2[i]);
							UL3.innerHTML = "";
							


							for (let i = 0; i < array3.length; i++) {
								
								UL2.innerHTML = "";
								UL3.innerHTML = "";

								UL3.innerHTML += "<li class='li-array'>" + array3[i] + "</li>";

								array3[i];
							}

							UL3.addEventListener('click', borra);

							function borra(e) {
								for (let i = 0; i < array3.length; i++) {
									array3.shift(array3[i]);
										
										UL3.innerHTML = "<label style='text-align: center; display:block; color:white;background: red; padding:10px;'>"
										+ "Borrado" + "</label>";
									
									setTimeout(function(){
										UL3.innerHTML = "";
									},1000);


									array3[i];

								}
							}
						}
					}
				}

	CLOSE.addEventListener('click', close);

	function close(e) {
		CLOSE.innerHTML = modal2;
	}

	
				