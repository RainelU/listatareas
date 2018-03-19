let arrayPendientes = [];
let li = document.getElementsByClassName("li-array");
let liRealizando = document.getElementsByClassName("li-realizando");
let arrayRealizando = [];
let arrayRealizadas = [];
		
const PENDIENTES = document.getElementById("pendientes");
const REALIZANDO = document.getElementById("realizando");
const REALIZADAS = document.getElementById("realizadas");
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
			if (INPUT.length >= 21) {
				CLOSE.innerHTML = modal;

			}else if (/\S/.test(INPUT)) {
				arrayPendientes.push(INPUT);
						
				PENDIENTES.innerText = "";

				for (let i = 0; i < arrayPendientes.length ; i++) {
						document.getElementById("pendientes").innerHTML += "<li name='li' class='li-array'>" + arrayPendientes[i] 
						+ "</li>";
						
								arrayPendientes[i];
							
				

						PENDIENTES.addEventListener('click', anadePENDIENTES);

						function anadePENDIENTES(e) {
							if (e.target && e.target.className === 'li-array') {
							arrayRealizando.push(arrayPendientes[i]);
							PENDIENTES.innerText = "";

							arrayPendientes.pop(arrayRealizando[i]);

							for (let i = 0; i < arrayRealizando.length; i++) {

								PENDIENTES.innerText = "";
								REALIZANDO.innerText = "";

								REALIZANDO.innerHTML += "<li class='li-realizando'>" + arrayRealizando[i] + "</li>";

								arrayRealizando[i];
							
							}
						}
						
						REALIZANDO.addEventListener('click', anadeREALIZANDO);

						function anadeREALIZANDO(e) {
							if (e.target && e.target.className === 'li-realizando') {
							arrayRealizadas.push(arrayRealizando[i]);
							REALIZADAS.innerText = "";
							
							console.log(e);
							console.log(this);

							for (let i = 0; i < arrayRealizadas.length; i++) {
								
								REALIZANDO.innerText = "";
								REALIZADAS.innerText = "";

								REALIZADAS.innerHTML += "<li class='li-realizadas'>" + arrayRealizadas[i] + "</li>";

								arrayRealizadas[i];
							}
						}

							REALIZADAS.addEventListener('click', borra);

							function borra(e) {
								for (let i = 0; i < arrayRealizadas.length; i++) {
									arrayRealizadas.shift(arrayRealizadas[i]);
										
										REALIZADAS.innerHTML = "<label style='text-align: center; display:block; color:white;background: red; padding:10px;'>"
										+ "Borrado" + "</label>";
									
									setTimeout(function(){
										REALIZADAS.innerText = "";
									},600);


									arrayRealizadas[i];

								}
							}
						}
					}
				}
			}else{
					CLOSE.innerHTML = modal;
				}
		}

	CLOSE.addEventListener('click', close);

	function close(e) {
		CLOSE.innerHTML = modal2;
	}