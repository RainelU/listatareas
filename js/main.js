let arrayPendientes = [];
let arrayRealizando = [];
let arrayRealizadas = [];

let newLiPendientes = document.createElement("li");	
const PENDIENTES = document.getElementById("pendientes");
const INPUT = document.getElementById("input-add");
const REALIZANDO = document.getElementById("realizando");
const REALIZADAS = document.getElementById("realizadas");
const BUTTON = document.getElementById("button-add");
const CLOSE = document.getElementById("modal");


let modal = "<div>" + "<div class='modal-add' style='display:block;'>" + "<div class='modal-o'>" + "<h2>No puedes ejecutar el INPUT" + "<h2> a menos que sea de 1 a 20 dígitos...</h2>"+ "<h2> Ingresalo o no podrás acceder y añadir tareas.</h2>" + "</h2>" +"<button class='button'>CLOSE &times</button>" + "</div>" + "</div>" + "</div>";

let modal2 = "<div>" + "<div class='modal-add' style='display:none;'>" + "<div class='modal-o'>" + "<h2>No puedes ejecutar el INPUT" + "<h2> a menos que sea de 1 a 15 dígitos...</h2>"
+ "<h2> Ingresalo o no podrás acceder y añadir tareas.</h2>" + "</h2>" +
"<button class='button'>CLOSE &times</button>" + "</div>" + "</div>" + "</div>";


	/*Obtener el valor de INPUT*/

	BUTTON.addEventListener('click', valor);

		function valor(e) {
			INPUT.value;
			arrayPendientes.push(INPUT.value);
			INPUT.value = "";

			mostrarTareasEnLista();
		}

		function mostrarTareasEnLista(){
				PENDIENTES.innerHTML = "";
				REALIZANDO.innerHTML = "";
				REALIZADAS.innerHTML = "";
			for (let i = 0; i < arrayPendientes.length; i++) {

				let liPendientes = document.createElement("li");
				let liPendientesContent = document.createTextNode(arrayPendientes[i]);
					liPendientes.appendChild(liPendientesContent);
					PENDIENTES.appendChild(liPendientes);

					liPendientes.className = "li-array";
					liPendientes.addEventListener('click', function(e){cambiarDeListaPendientes(e)});
			}

			for (let i = 0; i < arrayRealizando.length; i++) {
				let liRealizando = document.createElement("li");
				let liRealizandoContent = document.createTextNode(arrayRealizando[i]);

				liRealizando.appendChild(liRealizandoContent);
				REALIZANDO.appendChild(liRealizando);

				liRealizando.className = "li-realizando";
				liRealizando.addEventListener('click', function(e){cambiarDeListaRealizando(e);});
			}

			for (let i = 0; i < arrayRealizadas.length; i++) {
				let liRealizadas = document.createElement("li");
				let liRealizadasContent = document.createTextNode(arrayRealizadas[i]);

				liRealizadas.className = "li-realizadas";

				liRealizadas.appendChild(liRealizadasContent);
				REALIZADAS.appendChild(liRealizadas);

				REALIZADAS.addEventListener('click', function(e){borra(e);})

			}
		}

			function cambiarDeListaPendientes(e){
				
				let index = arrayPendientes.indexOf(e.target.innerText);
				const ELEMENTOS_BORRADOS = arrayPendientes.splice(index, 1);
				arrayRealizando.push(ELEMENTOS_BORRADOS[0]);
				mostrarTareasEnLista();
			}

			function cambiarDeListaRealizando(e){
				let liRealizando = document.createElement("li");
				let index = arrayRealizando.indexOf(e.target.innerText);
				const ELEMENTOS_BORRADOS = arrayRealizando.splice(index, 1);
				arrayRealizadas.push(ELEMENTOS_BORRADOS[0]);
				mostrarTareasEnLista();
			}

			function borra(e) {
				for (let i = 0; i < arrayRealizadas.length; i++) {

					setTimeout(function(){
												REALIZADAS.innerHTML = "<label style='text-align: center; display:block; color:white;background: red; padding:10px;'>"
						+ "Borrado" + "</label>";
					},600);

					mostrarTareasEnLista();
								}
							}
			/*Final del Valor del INPUT*/



	/*BUTTON.addEventListener('click', valor);

	function valor(e) {
		const INPUT = document.getElementById("input-add").value;
			if (INPUT.length >= 21) {
				CLOSE.innerHTML = modal;

			}else if (/\S/.test(INPUT)) {
				arrayPendientes.push(INPUT);
						
				PENDIENTES.innerText = "";

				for (let i = 0; i < arrayPendientes.length ; i++) {
						document.getElementById("pendientes")
							newLiPendientes.appendChild("li");
						
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

								REALIZANDO.createElement("li");

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

								REALIZADAS.createElement("li");

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
		}*/

	CLOSE.addEventListener('click', close);

	function close(e) {
		CLOSE.innerHTML = modal2;
	}