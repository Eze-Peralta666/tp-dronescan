    // Animar barras de habilidades al cargar
    $(document).ready(function() {
        $('.progress-bar').each(function() {
          let finalWidth = $(this).text();
          $(this).animate({ width: finalWidth }, 1000);
        });
      });