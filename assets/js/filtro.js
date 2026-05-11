    // Filtro por categoría usando jQuery .filter()
    $('.filter-btn').click(function() {
        const filter = $(this).data('filter');
        if (filter === 'all') {
          $('.col').show();
        } else {
          $('.col').each(function() {
            $(this).toggle($(this).data('category') === filter);
          });
        }
      });