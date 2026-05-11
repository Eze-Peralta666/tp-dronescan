AOS.init(); // Activar scroll reveal

// Filtro por tags
$('.tag-filter button').on('click', function () {
  const tag = $(this).data('tag');
  $('.tag-filter button').removeClass('active');
  $(this).addClass('active');
  if (tag === 'all') {
    $('.blog-item').show();
  } else {
    $('.blog-item').hide();
    $(`.blog-item[data-tag='${tag}']`).show();
  }
});

// Acción para responder
$('.responder').on('click', function (e) {
  e.preventDefault();
  alert('Función de respuesta aún en desarrollo.');
});