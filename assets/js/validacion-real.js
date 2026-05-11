    // Validación en tiempo real
    $("#contactForm input, #contactForm textarea").on("input", function () {
        if (this.checkValidity()) {
          $(this).removeClass("is-invalid").addClass("is-valid");
        } else {
          $(this).removeClass("is-valid").addClass("is-invalid");
        }
      });