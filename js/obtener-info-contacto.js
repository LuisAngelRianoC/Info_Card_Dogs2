// Función para cargar el archivo JSON de contacto y llenar los campos
function cargarContacto() {
    fetch('info-contacto.json')
        .then(response => response.json())
        .then(data => {
            // Obtener el primer elemento del arreglo
            var contacto = data[0];

            // Llenar los campos con los datos del contacto
            document.getElementById('Responsable').value = contacto.nombre;
            document.getElementById('Telefono1').value = contacto.telefono1;
            document.getElementById('Telefono2').value = contacto.telefono2;
            document.getElementById('Direccion').value = contacto.direccion;
            document.getElementById('Correo').value = contacto.correo;
        })
        .catch(error => console.error('Error al cargar los datos de contacto:', error));
}

// Llamar a la función para cargar los datos de contacto cuando se cargue la página
document.addEventListener('DOMContentLoaded', cargarContacto);
