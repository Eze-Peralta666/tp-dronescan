document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('counter');
  const target = 15420; // El número final de hectáreas que quieras mostrar
  const duration = 2000; // Duración de la animación en milisegundos (2 segundos)
  const step = target / (duration / 16); // 16ms es aprox 60fps

  let current = 0;

  const updateCounter = () => {
      current += step;
      if (current < target) {
          // Usa Math.ceil para no mostrar decimales y formatea con puntos
          counter.innerText = Math.ceil(current).toLocaleString('es-AR');
          requestAnimationFrame(updateCounter);
      } else {
          counter.innerText = target.toLocaleString('es-AR');
      }
  };

  // Usamos IntersectionObserver para que la animación empiece SOLO
  // cuando el usuario scrollea y ve el contador en pantalla
  const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
          updateCounter();
          observer.disconnect(); // Para que solo anime la primera vez
      }
  });

  observer.observe(counter);
});