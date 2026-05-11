    // Mostrar valor en estrellas al click
    $('.star-rating input').on('change', function() {
        const ratingValue = $(this).val();
        console.log('Valor de rating seleccionado:', ratingValue);
      });