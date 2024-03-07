function mostrarContenido(id, elemento) {
    // Ocultar todas las secciones
    document.getElementById('informacion').style.display = 'none';
    document.getElementById('contacto').style.display = 'none';
    document.getElementById('cartilla').style.display = 'none';

    // Mostrar la sección seleccionada
    document.getElementById(id).style.display = 'block';

    // Remover la clase 'active' de todas las pestañas
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    // Agregar la clase 'active' a la pestaña seleccionada
    elemento.classList.add('active');
}