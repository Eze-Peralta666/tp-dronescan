// Spinner de formulario al enviar
$('#contactForm').on('submit', function(e) {
    e.preventDefault();
    $('#spinner').removeClass('d-none');
    setTimeout(() => {
      alert('Mensaje enviado');
      $('#spinner').addClass('d-none');
      $('#contactForm')[0].reset();
    }, 2000);
  });