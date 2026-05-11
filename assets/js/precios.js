    // Inicializa tooltips de Bootstrap
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el))

    // Toggle de precios mensual/anual
    $('#togglePrecios').on('change', function () {
      const mostrarAnual = $(this).is(":checked");
      $('.precio').each(function () {
        const precio = mostrarAnual ? $(this).data('anual') : $(this).data('mensual');
        $(this).text(`$${precio}`);
      });
    });

    // Efecto de hover con jQuery para resaltar columna
    $('#tablaPrecios td, #tablaPrecios th').hover(
      function () {
        const colIndex = $(this).index();
        $('#tablaPrecios tr').each(function () {
          $(this).children().eq(colIndex).addClass('highlighted');
        });
      },
      function () {
        $('#tablaPrecios td, #tablaPrecios th').removeClass('highlighted');
      }
    );