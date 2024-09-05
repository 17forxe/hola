document.addEventListener('DOMContentLoaded', function() {
  // Funcionalidad de añadir al carrito
  const formsAnadirAlCarrito = document.querySelectorAll('form[action="/cart/add"]');
  formsAnadirAlCarrito.forEach(form => {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(form);
      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        alert('¡Producto añadido al carrito!');
        // Aquí podrías actualizar un contador de carrito si tienes uno en tu encabezado
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
  });
});