    // Spinner y modal al enviar
    $("#contactForm").on("submit", function (e) {
        e.preventDefault();
  
        let form = this;
        if (!form.checkValidity()) {
          $(form).addClass("was-validated");
          return;
        }
  
        $("#spinner").fadeIn();
  
        // Simula envío
        setTimeout(function () {
          $("#spinner").fadeOut();
          $("#confirmModal").modal("show");
          form.reset();
          $("#contactForm input, #contactForm textarea").removeClass("is-valid");
        }, 1500);
      });