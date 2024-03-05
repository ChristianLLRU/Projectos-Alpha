// Contenido del archivo script.js

// Llamada a la función fetch para obtener los datos del archivo JSON
fetch('CadenaJSON.json')
  .then(response => response.json()) // Parsear la respuesta a JSON
  .then(data => {
    // Trabajar con los datos obtenidos del JSON
    console.log(data.LaLiga.equipos); // Por ejemplo, mostrar los equipos en la consola
    // Aquí puedes realizar operaciones o utilizar estos datos como necesites
  })
  .catch(error => {
    console.log('Error al obtener los datos:', error);
  });
