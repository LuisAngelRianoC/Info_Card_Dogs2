// Función para cargar el archivo JSON y llenar los campos
function cargarDatos() {
    fetch('info-mascota.json')
        .then(response => response.json())
        .then(data => {
            // Obtener el primer elemento del arreglo
            var mascota = data[0];

            // Llenar los campos con los datos de la mascota
            document.getElementById('Nombre').textContent = mascota.nombre;
            document.getElementById('Raza').value = mascota.raza;
            document.getElementById('Peso').value = mascota.peso + ' kg';
            document.getElementById('Sexo').value = mascota.sexo;
            document.getElementById('Especie').value = mascota.especie;
            document.getElementById('Fecha').value = mascota.fecha;
            document.getElementById('Color').value = mascota.color;

            asignarFoto(mascota.foto);
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

function asignarFoto(fotoUrl) {
    var foto = document.getElementById('foto-mascota');
    foto.src = fotoUrl;
}

// Llamar a la función para cargar los datos cuando se cargue la página
document.addEventListener('DOMContentLoaded', cargarDatos);
