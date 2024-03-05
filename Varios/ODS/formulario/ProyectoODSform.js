const ods = {
    pregunta: [
        { texto: "¿Tu empresa apoya activamente a empresas lideradas por mujeres?",
        respuestas: [
            { texto: "Sí, nuestra empresa tiene políticas y programas específicos para apoyar a empresas lideradas por mujeres, promoviendo la igualdad de género.", valor: 5 },
            { texto: "Estamos en proceso de explorar formas de apoyar a empresas lideradas por mujeres, pero aún no hemos implementado programas concretos al respecto.", valor: 3 },
            { texto: "No, nuestra empresa no tiene políticas o programas específicos para apoyar a empresas lideradas por mujeres en este momento.", valor: 2 },
            { texto: "No estoy seguro/a de la política de la empresa en este tema.", valor: 0 }
        ]},
        { texto: "¿Tu empresa promueve la igualdad de oportunidades laborales para hombres y mujeres?",
        respuestas: [
            { texto: "Sí, existe una política clara de igualdad de oportunidades.", valor: 5 },
            { texto: "En su mayoría, pero hay áreas donde se podría mejorar.", valor: 3 },
            { texto: "No hay una política formal, pero se fomenta la igualdad de manera informal.", valor: 2 },
            { texto: "No, hay desigualdades evidentes en las oportunidades laborales.", valor: 0 }
        ]},
        {
          texto: "¿Qué medidas implementáis para promover la igualdad de género en las reuniones, eventos y charlas empresariales?",
          respuestas: [
              { texto: "Proporcionamos la participación en igualdad de género a todo el personal.", valor: 5 },
              { texto: "Promovemos la participación equitativa de hombres y mujeres en ciertas reuniones y charlas.", valor: 3 },
              { texto: "Se hace la exclusión de cierta parte del personal, debido a su género, en todas las reuniones y charlas.", valor: 2 },
              { texto: "No tomamos medidas específicas.", valor: 0 }
        ]},
        {
          texto: "¿Realizan charlas y conferencias para asegurar la eliminación de estereotipos de género en el desarrollo diario de las actividades de vuestra empresa?",
          respuestas: [
              { texto: "No realizamos charlas o conferencias para asegurar la eliminación de estereotipos de género.", valor: 0 },
              { texto: "No realizamos charlas o conferencias para asegurar la eliminación de estereotipos de género. Pero tenemos pensado hacerlas en un periodo corto de tiempo. Acortar el periodo de tiempo lo máximo posible.", valor: 2 },
              { texto: "Realizamos una charla o conferencia al año para asegurar la eliminación de estereotipos de género.", valor: 3 },
              { texto: "Realizamos más de una charla o conferencia al año para asegurar la eliminación de estereotipos de género.", valor: 5 }
        ]},
        {
          texto: "¿La información dada al cliente está sesgada por género?",
          respuestas: [
              { texto: "El trato para los clientes es formal y adecuado para cada uno de ellos, sin tener restricciones por el género y fomentando la importancia de la igualdad de género.", valor: 5 },
              { texto: "No se tienen en cuenta diferentes formalidades para el género de cada cliente.", valor: 3 },
              { texto: "Según el género no damos ningún tipo de información.", valor: 2 },
              { texto: "Se prioriza un género exclusivo como cliente, buscando la exclusión y desinterés por el otro.", valor: 0 }
        ]},    
        {
          texto: "¿Cuál es la proporción de mujeres que ejercen puestos directivos?",
          respuestas: [
              { texto: "Entre el 100 y el 80% de la dirección", valor: 5 },
              { texto: "De un 50% a un 80%", valor: 3 },
              { texto: "Entre un 20% y un 40%", valor: 2 },
              { texto: "Entre un 0 hasta el 20%", valor: 1 }
        ]},
  {
          texto: "¿Cuál es la proyección para el aumento de mujeres en posiciones de liderazgo para los próximos 5 años?",
          respuestas: [
              { texto: "Menos del 5%", valor: 0 },
              { texto: "Entre un 5% y un 20%", valor: 2 },
              { texto: "Entre un 20% y un 50%", valor: 3 },
              { texto: "Más de un 50%", valor: 5 }
        ]},
        {
          texto: "¿Qué porcentaje de hombres y mujeres dan servicios asistenciales relacionados con la higiene y la limpieza en su compañía?",
          respuestas: [
              { texto: "Menos del 50% de mujeres, no existe una distinción marcada entre estas labores para ambos géneros.", valor: 5 },
              { texto: "El 50%, los cargos se encuentran equilibrados.", valor: 3 },
              { texto: "El 75% los desarrollan mujeres.", valor: 2 },
              { texto: "El 100% de mujeres.", valor: 0 }
        ]},
        {
          texto: "¿Qué porcentaje de hombres y mujeres dan servicios asistenciales relacionados con el mantenimiento en su compañía?",
          respuestas: [
              { texto: "Menos del 50% de mujeres, no existe una distinción marcada entre estas labores para ambos géneros.", valor: 0 },
              { texto: "El 50%, los cargos se encuentran equilibrados.", valor: 5 },
              { texto: "El 75% los desarrollan mujeres.", valor: 3 },
              { texto: "El 100% de mujeres.", valor: 2 }
        ]},
        {
          texto: "¿Qué porcentaje de hombres y mujeres se dedican a la atención al cliente en tu empresa?",
          respuestas: [
              { texto: "Menos del 50% de mujeres, no existe una distinción marcada entre estas labores para ambos géneros.", valor: 5 },
              { texto: "El 50%, los cargos se encuentran equilibrados.", valor: 3 },
              { texto: "El 75% los desarrollan mujeres.", valor: 2 },
              { texto: "El 100% de mujeres.", valor: 0 }
        ]},
        {
          texto: "¿En nuestro equipo de marketing hay igualdad de género en cuanto a representación y oportunidades de liderazgo?",
          respuestas: [
              { texto: "Sí, hay igualdad de género en cuanto a representación y oportunidades de liderazgo.", valor: 5 },
              { texto: "Hay igualdad de género en cuanto a representación, pero no en cuanto a oportunidades de liderazgo.", valor: 3 },
              { texto: "Hay igualdad de género en cuanto a oportunidades de liderazgo, pero no en cuanto a representación.", valor: 2 },
              { texto: "No hay igualdad de género en cuanto a representación ni a oportunidades de liderazgo.", valor: 0 }
        ]},
        {
          texto: "¿Se han llevado a cabo actividades de formación para aumentar la concienciación de la desigualdad presente en la prestación de determinados servicios?",
          respuestas: [
              { texto: "Sí, se han llevado a cabo prácticas fomentando la concienciación sobre la igualdad y fueron bien recibidas.", valor: 5 },
              { texto: "Sí, pero no lo suficiente, las prácticas adoptadas fueron bien recibidas pero no vemos una aplicación real en la práctica.", valor: 3 },
              { texto: "Se ha intentado por parte de la empresa pero la propuesta no ha sido bien recibida por la plantilla.", valor: 2 },
              { texto: "No se ha propuesto, ya que la mayoría de los trabajadores y trabajadoras no están cómodos cuando hay un intercambio de roles.", valor: 0 }
        ]},
        {
          texto: "¿Las imágenes publicitarias generadas por tu empresa reflejan roles de género tradicionales?",
          respuestas: [
              { texto: "No, nunca.", valor: 5 },
              { texto: "Sí, pero no nos habíamos fijado en ello.", valor: 2 },
              { texto: "Si, de manera intencionada.", valor: 0 }
        ]},
  {
          texto: "¿Crees que la desigualdad de género afecta al funcionamiento de la empresa?",
          respuestas: [
              { texto: "Sí, y por ello intentamos mejorar.", valor: 5 },
              { texto: "Sí, pero no sabemos qué hacer.", valor: 3 },
              { texto: "No, no lo sabía.", valor: 2 },
              { texto: "No, no lo tengo en cuenta.", valor: 0 }
        ]},
        {
          texto: "¿Tu empresa incluye la atención postnatal para ambos géneros como derecho del trabajador y trabajadora?",
          respuestas: [
              { texto: "Sí, y tenemos actividades al respecto.", valor: 5 },
              { texto: "Sí, pero sólo tenemos actividades para mujeres.", valor: 3 },
              { texto: "No, no lo sabía.", valor: 2 },
              { texto: "No, no me interesa.", valor: 0 }
        ]},
        {
          texto: "¿Tu empresa fomenta la igualdad de género a través de la implementación de un lenguaje inclusivo en sus políticas y comunicaciones, considerando aspectos como la diversidad, el respeto y la equidad en la expresión verbal y escrita?",
          respuestas: [
              { texto: "Sí, el lenguaje inclusivo forma parte de la cultura de nuestra empresa.", valor: 5 },
              { texto: "Sí, aunque no tenemos claras las reglas del lenguaje inclusivo.", valor: 2 },
              { texto: "No, no me preocupa.", valor: 0 }
        ]},
        {
          texto: "¿Ha adoptado su empresa alguna política de conciliación familiar y laboral?",
          respuestas: [
              { texto: "Sí, hemos adoptado diversas medidas incluidas en la responsabilidad social corporativa.", valor: 5 },
              { texto: "Sí, pero todavía trabajamos en mejorarlo.", valor: 3 },
              { texto: "No, pero lo estamos estudiando.", valor: 2 },
              { texto: "No, nos limitamos a adoptar las medidas recogidas en el estatuto de los trabajadores.", valor: 0 }
        ]},
        {
          texto: "¿Tu empresa imparte el protocolo de prevención de riesgos psicosociales a los trabajadores y trabajadoras?",
          respuestas: [
              { texto: "Sí, hemos adoptado el protocolo de riesgos psicosociales.", valor: 5 },
              { texto: "Sí, pero todavía trabajamos en mejorarlo.", valor: 3 },
              { texto: "No, pero lo estamos estudiando.", valor: 2 },
              { texto: "No, no sabíamos de la necesidad de tener un protocolo de riesgos psicosociales.", valor: 0 }
        ]},
        {
          texto: "¿La empresa tiene establecido un canal de denuncias en caso de vulnerabilidad de la integridad física o psíquica de su personal?",
          respuestas: [
              { texto: "Si, hemos establecido un canal de denuncias.", valor: 5 },
              { texto: "Si, pero no se ha puesto en práctica.", valor: 3 },
              { texto: "No, pero se está discutiendo.", valor: 2 },
              { texto: "No, no lo vemos necesario.", valor: 0 }
        ]},
        {
          texto: "¿La resolución del proceso del canal de denuncias se considera ágil y sencillo?",
          respuestas: [
              { texto: "Sí, desde el primer momento la persona afectada tiene la posibilidad de compartir con un representante su caso, aunque el procedimiento sea más extenso.", valor: 5 },
              { texto: "Sí, en el plazo de una semana la empresa ya toma medidas al respecto.", valor: 3 },
              { texto: "No existe canal de denuncia en nuestra empresa.", valor: 2 },
              { texto: "La respuesta al proceso depende del nivel de trabajo.", valor: 0 }
        ]},
  {
          texto: "¿La empresa dispone de algún recurso de atención psicológica para los empleados?",
          respuestas: [
              { texto: "Sí, tenemos un profesional en la empresa.", valor: 5 },
              { texto: "Sí, tenemos un convenio con un profesional externo.", valor: 3 },
              { texto: "No nos lo habíamos planteado, pero creemos que sería necesario.", valor: 2 },
              { texto: "No, no disponemos de este recurso ni lo dispondremos en un futuro.", valor: 0 }
        ]},
        {
          texto: "¿La empresa dispone de algún servicio de guardería para los empleados?",
          respuestas: [
              { texto: "Sí, tenemos una guardería en la empresa.", valor: 5 },
              { texto: "Sí, tenemos un convenio con una guardería cercana.", valor: 3 },
              { texto: "No nos lo habíamos planteado, pero creemos que sería necesario.", valor: 2 },
              { texto: "No, no disponemos de este recurso ni lo dispondremos en un futuro.", valor: 0 }
        ]},
        {
          texto: "¿Para un mismo puesto de trabajo, se remunera igual a hombres y mujeres?",
          respuestas: [
              { texto: "Sí, se remunera según convenio.", valor: 5 },
              { texto: "No, las mujeres están mejor remuneradas.", valor: 2 },
              { texto: "No, los hombres están mejor remunerados.", valor: 0 }
        ]},
        {
          texto: "¿Existe conocimiento sobre el 'techo de cristal'?",
          respuestas: [
              { texto: "Sí y por ello desarrollamos políticas y ofrecemos condiciones laborales que apacigüen este fenómeno.", valor: 5 },
              { texto: "Sí pero no se ha desarrollado ningún protocolo para evitarlo.", valor: 2 },
              { texto: "No tenemos conocimiento sobre ello.", valor: 0 }
        ]},
        {
          texto: "¿A la hora de despedir a un trabajador se tiene en cuenta el género?",
          respuestas: [
              { texto: "Si, se tienen más facilidades para prescindir de una mujer.", valor: 0 },
              { texto: "No, a la hora de tomar una decisión no se tiene en cuenta el sexo.", valor: 5 },
              { texto: "Si, es más fácil despedir a alguien si es hombre.", valor: 0 }
        ]},
        {
          texto: "Al adquirir un producto o servicio, ¿investiga si la empresa proveedora fomenta la igualdad de género?",
          respuestas: [
              { texto: "Sí, hacemos un estudio de la empresa para comprobar si fomentan la igualdad.", valor: 5 },
              { texto: "No, pero planeamos en un futuro proceder a investigar a las empresas proveedoras, para contribuir de esta manera a la igualdad de género.", valor: 2 },
              { texto: "No lo tenemos en cuenta.", valor: 0 }
        ]},
  {
          texto: "¿Qué medidas toma tu empresa para prevenir el mobbing por motivos de género?",
          respuestas: [
              { texto: "Si, constantemente.", valor: 5 },
              { texto: "Sí pero son penadas o corregidas.", valor: 3 },
              { texto: "No, se evita en la mayor medida posible.", valor: 0 }
        ]},
        {
          texto: "¿Existen horarios de trabajos flexibles para todos en tu empresa?",
          respuestas: [
              { texto: "La jornada laboral está adaptada a las necesidades de los empleados.", valor: 5 },
              { texto: "La jornada laboral tiene una jornada con márgenes para entrada y salida.", valor: 3 },
              { texto: "No tenemos ninguna modalidad de horarios flexibles.", valor: 0 }
        ]},
        {
          texto: "¿La empresa contrata y/o promueve a los trabajadores por talento y méritos propios?",
          respuestas: [
              { texto: "Sí, la empresa únicamente contrata y/o promueve a los trabajadores por su valía y no tiene en cuenta otros factores como el género, religión, procedencia, etc.", valor: 5 },
              { texto: "No, la empresa no sólo contrata y/o promueve a los trabajadores por su valía, a veces influye en la toma de decisiones factores como el género, religión, procedencia, etc.", valor: 2 },
              { texto: "No, la empresa sólo contrata y/o promueve a los trabajadores por factores como el género, religión, procedencia, etc.", valor: 0 }
        ]},
        {
          texto: "¿Se cometen en tu empresa de forma habitual situaciones que lleven a una discriminación positiva?",
          respuestas: [
              { texto: "Sí, constantemente.", valor: 0 },
              { texto: "Sí pero son penadas o corregidas.", valor: 2 },
              { texto: "No, se evita en la mayor medida posible.", valor: 5 }
        ]}
    ],
    recomendaciones: [{ texto: "Texto de recomendación" }]
  };

// Obtenemos el div donde se mostrarán las preguntas
const preguntasDiv = document.getElementById('preguntas');

// Generamos las preguntas y opciones de respuesta
ods.pregunta.forEach((pregunta, index) => {
    const preguntaHTML = `
        <div class="pregunta">
            <p>${index + 1}. ${pregunta.texto}</p>
            <div class="respuestas">
                ${pregunta.respuestas.map(respuesta => `
                    <div type="button" id="caluclarBtn" class="respuesta">
                        <input type="radio" class="input" name="pregunta${index}" value="${respuesta.valor}">
                        <label>${respuesta.texto}</label>
                    </div >
                `).join('')}
            </div>
        </div>
    `;
    preguntasDiv.innerHTML += preguntaHTML;
});

document.querySelectorAll('.respuesta').forEach(respuestaDiv => {
    respuestaDiv.addEventListener('click', function(event) {
        // Obtener el valor de la respuesta desde el atributo 'value' del div respuesta
        const valorRespuesta = this.getAttribute('data-value');
        
        // Verificar si se seleccionó una respuesta
        if (valorRespuesta) {
            // Hacer cualquier acción adicional que necesites con la respuesta seleccionada
            console.log('Se seleccionó la respuesta:', valorRespuesta);
            // Agregar la clase "seleccionada" al div de respuesta
            this.classList.add('seleccionada');
        } else {
            // No se seleccionó ninguna respuesta
            console.log('No se seleccionó ninguna respuesta');
            // Eliminar la clase "seleccionada" del div de respuesta
            this.classList.remove('seleccionada');
        }
        
        // Si hay un input dentro del div, marcarlo como seleccionado
        const inputRadio = this.querySelector('input[type="radio"]');
        if (inputRadio) {
            inputRadio.checked = true;
        }
    });
    
    // También agregamos un event listener para el input radio dentro del div
    const inputRadio = respuestaDiv.querySelector('input[type="radio"]');
    if (inputRadio) {
        inputRadio.addEventListener('click', function(event) {
            // Detenemos la propagación del evento para evitar que se ejecute el listener del div
            event.stopPropagation();
        });
    }
});



// Obtenemos el botón de calcular puntuación
const calcularBtn = document.getElementById('calcularBtn');
const seleccionRequerida = document.getElementById('seleccionRequerida');

// Función para calcular la puntuación
calcularBtn.addEventListener('click', () => {
    const respuestas = [];
    // Obtenemos las respuestas seleccionadas por el usuario
    document.querySelectorAll('input[type="radio"]:checked').forEach(input => {
        respuestas.push(input.value);
    });

    // Verificar si se han seleccionado respuestas
    if (respuestas.length < 30) {
        // Si no se han seleccionado respuestas, mostrar el mensaje de selección requerida
        seleccionRequerida.style.display = 'inline';
        return; // Salir de la función
    }

    // Ocultar el mensaje de selección requerida si se han seleccionado respuestas
    seleccionRequerida.style.display = 'none';

    // Calculamos la puntuación total
    const puntuacionTotal = respuestas.reduce((total, valor) => total + parseInt(valor), 0);
    
    // Ocultamos test
    test.style.display = 'none';
    
    // Mostramos puntuacion
    const resultadoH2 = document.getElementById('resultado');
    resultadoH2.textContent = `Tu puntuación total es: ${puntuacionTotal}`;

    // Mostramos comentario según puntuación
    if (puntuacionTotal < 75) { 
        // Almacenamos la etiqueta p y le añadimos el contenido
        const comentarioP = document.getElementById('comentario');
        comentarioP.textContent = 'MAL ESPABILA 😡';
    } else if (puntuacionTotal >= 75 && puntuacionTotal < 100) {
        // Almacenamos la etiqueta p y le añadimos el contenido
        const comentarioP = document.getElementById('comentario');
        comentarioP.textContent = 'MEJORABLE CONFIAMOS EN TI 😢';

    } else if (puntuacionTotal >= 100 && puntuacionTotal < 140) {
         // Almacenamos la etiqueta p y le añadimos el contenido
         const comentarioP = document.getElementById('comentario');
         comentarioP.textContent = 'POR EL BUEN CAMINO SIGA TRABAJANDO EN ELLO 👍';

    } else {
         // Almacenamos la etiqueta p y le añadimos el contenido
         const comentarioP = document.getElementById('comentario');
         comentarioP.textContent = 'EXCELENTE SIGUE ASÍ ✨';
        
    }
});



// Variable para mantener un seguimiento del índice de la pregunta actual
let preguntaActual = 0;

// Función para mostrar la pregunta actual
function mostrarPregunta(index) {
    const preguntas = document.querySelectorAll('.pregunta');
    preguntas.forEach((pregunta, i) => {
        if (i === index) {
            pregunta.style.display = 'block';
        } else {
            pregunta.style.display = 'none';
        }
    });

    // Mostrar/ocultar botones según el índice de la pregunta
    const anteriorBtn = document.getElementById('anteriorBtn');
    if (index === 0) {
        anteriorBtn.style.display = 'none';
    } else {
        anteriorBtn.style.display = 'block';
    }

    const siguienteBtn = document.getElementById('siguienteBtn');
    if (index === preguntas.length - 1) {
        siguienteBtn.style.display = 'none';
        document.getElementById('calcularBtn').style.display = 'block';
    } else {
        siguienteBtn.style.display = 'block';
        document.getElementById('calcularBtn').style.display = 'none';
    }
}

function siguientePregunta() {
    const respuestaSeleccionada = document.querySelector(`input[name="pregunta${preguntaActual}"]:checked`);
    if (!respuestaSeleccionada) {
        seleccionRequerida.style.display = 'inline';
        return;
    }
    preguntaActual++;
    seleccionRequerida.style.display = 'none';
    mostrarPregunta(preguntaActual);
}

function anteriorPregunta() {
    preguntaActual--;
    mostrarPregunta(preguntaActual);
}

const siguienteBtn = document.getElementById('siguienteBtn');
const anteriorBtn = document.getElementById('anteriorBtn');

siguienteBtn.addEventListener('click', siguientePregunta);
anteriorBtn.addEventListener('click', anteriorPregunta);

// Mostrar la primera pregunta al cargar la página
mostrarPregunta(preguntaActual);