/* document.addEventListener('DOMContentLoaded', function() {
    // Crear el cursor personalizado
    var cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    // Mover el cursor personalizado con el ratón
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
}); */
document.addEventListener('DOMContentLoaded', function() {
    // Crear el cursor personalizado
    var cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    // Obtener el tamaño del cursor para centrarlo
    var cursorSize = 20;

    // Mover el cursor personalizado con el ratón
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.pageX - (cursorSize / 2) + 'px';
        cursor.style.top = e.pageY - (cursorSize / 2) + 'px';
    });
});
