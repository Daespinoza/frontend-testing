(function () {
  const contenedor = document.getElementById("listado");
  const plantillaVacio = document.getElementById("tpl-vacio");

  if (!PROYECTOS || PROYECTOS.length === 0) {
    contenedor.appendChild(plantillaVacio.content.cloneNode(true));
    return;
  }

  PROYECTOS.forEach((proyecto, i) => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = `${proyecto.carpeta}/index.html`;

    const estadoClase = proyecto.estado === "completo" ? "ok" : "pendiente";
    const estadoTexto = proyecto.estado === "completo" ? "completo" : "en progreso";

    card.innerHTML = `
      <div class="card-row">
        <span class="card-icon" aria-hidden="true">▸</span>
        <span class="card-name">${proyecto.carpeta}/</span>
        <span class="badge ${estadoClase}">${estadoTexto}</span>
      </div>
      <h2 class="card-title">${proyecto.nombre}</h2>
      <p class="card-desc">${proyecto.descripcion}</p>
      <div class="tags">
        ${proyecto.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
    `;

    card.style.animationDelay = `${i * 60}ms`;
    contenedor.appendChild(card);
  });
})();