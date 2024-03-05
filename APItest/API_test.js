document.addEventListener('DOMContentLoaded', function() {
  const pilotosColumna1 = document.getElementById('pilotos-columna1');
  const pilotosColumna2 = document.getElementById('pilotos-columna2');

  axios.get('https://api.openf1.org/v1/drivers?session_key=9158')
    .then(function(response) {
      if (response.status === 200) {
        const pilotos = response.data;

        // Objeto Pilotos equipo
        const pilotosPorEquipo = {};

        // Pilotos equipo
        pilotos.forEach(piloto => {
          if (!pilotosPorEquipo[piloto.team_name]) {
            pilotosPorEquipo[piloto.team_name] = [];
          }
          pilotosPorEquipo[piloto.team_name].push(piloto);
        });

        // Orden alfabético
        const nombresEquipos = Object.keys(pilotosPorEquipo).sort();

        // Columnas I/P
        nombresEquipos.forEach((equipo, index) => {
          const pilotosEquipo = pilotosPorEquipo[equipo];
          const columna = index % 2 === 0 ? pilotosColumna1 : pilotosColumna2;

          pilotosEquipo.forEach(piloto => {
            const pilotoCarta = `
            <div class="piloto-carta" style="background-color: ${piloto.team_colour}">
                <h2 >${piloto.full_name}</h2>
                <div class="imagen-contenedor" style="border: 4px solid ${piloto.team_colour};">
                    <img src="${piloto.headshot_url}" alt="${piloto.full_name}">
                </div>
                <p><strong>Equipo:</strong> ${piloto.team_name}</p>
                <p><strong>Código de País:</strong> ${piloto.country_code}</p>
                <p><strong>Número de Piloto:</strong> ${piloto.driver_number}</p>
            </div>
        `;
        ;
            columna.innerHTML += pilotoCarta;
          });
        });
      }
    })
    .catch(function(error) {
      console.error('Error al obtener los datos de los pilotos:', error);
    });
});
