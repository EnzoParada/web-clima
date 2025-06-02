const buscar = document.querySelector('#buscar');
const ciudad = document.querySelector('#ciudad');
const ubicacion = document.querySelector('#localizacion');
const temperatura = document.querySelector('#temperatura');
const descripcion = document.querySelector('#descripcion');

//boton buscar
buscar.addEventListener('click', () => {
    const nomCiudad = ciudad.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nomCiudad}&appid=f67eb2dd32483dc40375e01c49f2c2c9&lang=es`)
        .then(Response => Response.json())
        .then(data => {
            ubicacion.textContent = data.name;
            const tempC = data.main.temp - 273.15; 
            temperatura.textContent = `Temperatura:${tempC.toFixed(1)} °C`;
            descripcion.textContent = `Descripcion: ${data.weather[0].description}`;
        })
        .catch(error => {
        console.error('Error al obtener los datos:', error);
        ubicacion.textContent = 'Ciudad no encontrada o error de conexión';
        temperatura.textContent = '';
        descripcion.textContent = '';
    });
})