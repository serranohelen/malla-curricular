document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");
  const estado = {};

  // Guardar el estado inicial de cada ramo
  ramos.forEach(ramo => {
    const id = ramo.dataset.id;
    const requisito = ramo.dataset.requiere;
    estado[id] = { aprobado: false, requisito: requisito || null };
  });

  // Habilitar los ramos sin requisitos al inicio
  ramos.forEach(ramo => {
    const id = ramo.dataset.id;
    if (!estado[id].requisito) {
      ramo.classList.add("habilitado");
    }
  });

  // Actualizar visualmente los ramos desbloqueables
  function actualizarRamos() {
    ramos.forEach(ramo => {
      const id = ramo.dataset.id;
      const req = estado[id].requisito;
      if (req && estado[req]?.aprobado && !estado[id].aprobado) {
        ramo.classList.add("habilitado");
      }
    });
  }

  // Evento de clic en cada ramo
  ramos.forEach(ramo => {
    ramo.addEventListener("click", () => {
      const id = ramo.dataset.id;
      if (!estado[id].aprobado) {
        estado[id].aprobado = true;
        ramo.classList.add("aprobado");
        actualizarRamos();
      }
    });
  });
});

