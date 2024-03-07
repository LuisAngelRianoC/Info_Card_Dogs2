// Función para cargar el archivo JSON de citas y llenar la tabla
function cargarCitas() {
    fetch('info-cartilla.json')
        .then(response => response.json())
        .then(data => {
            llenarTabla(data);
        })
        .catch(error => console.error('Error al cargar las citas:', error));
}

// Función para llenar la tabla con los datos de las citas
function llenarTabla(citas) {
    var tablaBody = document.getElementById('tabla-body');

    citas.forEach((cita, index) => {
        var row = document.createElement('tr');

        var numero = document.createElement('th');
        numero.setAttribute('scope', 'row');
        numero.textContent = index + 1;
        row.appendChild(numero);

        var fecha = document.createElement('td');
        fecha.textContent = cita.fecha;
        row.appendChild(fecha);

        var veterinaria = document.createElement('td');
        veterinaria.textContent = cita.veterinaria;
        row.appendChild(veterinaria);

        var accion = document.createElement('td');
        var boton = document.createElement('button');
        boton.setAttribute('type', 'button');
        boton.setAttribute('class', 'btn btn-warning btn-sm');
        boton.innerHTML = '<i class="fa-regular fa-eye"></i>';
        boton.addEventListener('click', function() {
            mostrarInformacion(cita);
        });
        accion.appendChild(boton);
        row.appendChild(accion);

        tablaBody.appendChild(row);
    });
}

// Función para mostrar la información de la cita con SweetAlert2
function mostrarInformacion(cita) {
    Swal.fire({
        title: 'Información de la cita',
        html: `
            <p><strong>Fecha:</strong> ${cita.fecha}</p>
            <p><strong>Veterinaria:</strong> ${cita.veterinaria}</p>
<<<<<<< HEAD
            <p class="vacuna><strong>Vacuna:</strong> ${cita.vacuna}</p>
=======
            <p class="vacuna"><strong>Vacuna:</strong> ${cita.vacuna}</p>
>>>>>>> 7bf6e643c9488afcf11cb5f711d050a611554b34
            <p class="diluente"><strong>Diluente:</strong> ${cita.diluente}</p>
            <p><strong>Peso:</strong> ${cita.peso}</p>
            <p><strong>Fecha siguiente:</strong> ${cita['fecha-sig']}</p>
        `,
        confirmButtonText: 'Cerrar',
        customClass: {
            container: 'my-swal'
        }
    });
}


// Llamar a la función para cargar las citas cuando se cargue la página
document.addEventListener('DOMContentLoaded', cargarCitas);
