document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    // Leemos si el usuario ya había elegido un tema antes
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Aplicar el tema inmediatamente al cargar la página
    document.documentElement.setAttribute('data-bs-theme', currentTheme);
    updateButtonIcon(currentTheme);

    // Si el botón existe en la página, le agregamos la función de clic
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-bs-theme');
            let newTheme = theme === 'dark' ? 'light' : 'dark';

            // Cambiamos el tema, lo guardamos en la memoria y actualizamos el botón
            document.documentElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateButtonIcon(newTheme);
        });
    }

    function updateButtonIcon(theme) {
        if(themeToggleBtn) {
            if (theme === 'dark') {
                themeToggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i> Modo Claro';
                themeToggleBtn.className = 'btn btn-outline-light ms-3';
            } else {
                themeToggleBtn.innerHTML = '<i class="bi bi-moon-stars-fill"></i> Modo Oscuro';
                themeToggleBtn.className = 'btn btn-outline-dark ms-3'; // o btn-outline-light dependiendo del color de tu navbar
            }
        }
    }
});