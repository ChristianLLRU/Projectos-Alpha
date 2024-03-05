let frutas = ["manzana", "banana", "cereza", "dátil", "uva"];

function agregarFruta() {
  let nuevaFruta = document.getElementById("nuevaFruta").value;
  
  if (nuevaFruta !== "") {
    frutas.push(nuevaFruta);

    let ulElement = document.getElementById("frutasLista");
    let liElement = document.createElement("li");
    liElement.textContent = nuevaFruta;
    ulElement.appendChild(liElement);

    document.getElementById("nuevaFruta").value = "";
  }
}

// Mostrar frutas existentes al cargar la página
let ulElement = document.getElementById("frutasLista");
frutas.forEach(function(fruta) {
  let liElement = document.createElement("li");
  liElement.textContent = fruta;
  ulElement.appendChild(liElement);
});
