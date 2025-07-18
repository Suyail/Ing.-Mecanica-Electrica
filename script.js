const cursos = [
  {
    nombre: "Matematica",
    semestre: 1,
    creditos: 4,
    prerequisitos: []
  },
  {
    nombre: "Calculo",
    semestre: 1,
    creditos: 4,
    prerequisitos: []
  },
  {
    nombre: "Dibujo Mecanico I",
    semestre: 1,
    creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Materiales de Ingenieria I",
    semestre: 1,
    creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Taller de Argumentacion",
    semestre: 1,
    creditos: 2,
    prerequisitos: []
  },
  {
    nombre: "Taller de Artes",
    semestre: 1,
    creditos: 1,
    prerequisitos: []
  },
  {
    nombre: "Identidad y Peruanidad",
    semestre: 1,
    creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Procesos de Manufactura I",
    semestre: 2,
    creditos: 4,
    prerequisitos: []
  },
  {
    nombre: "Calculo Integral",
    semestre: 2,
    creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Dibujo Mecanico II",
    semestre: 2,
    creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Fisica",
    semestre: 2,
    creditos: 4,
    prerequisitos: []
  },
  {
    nombre: "Materiales de Ingenieria II",
    semestre: 2,
    creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Ingles",
    semestre: 2,
    creditos: 2,
    prerequisitos: []
  },
  {
    nombre: "Taller de Lectura y Redaccion",
    semestre: 2,
    creditos: 2,
    prerequisitos: []
  },
  {
    nombre: "Procesos de Manufactura II",
    semestre: 3,
    creditos: 4,
    prerequisitos: []
  },
  {
    nombre: "Estatica",
    semestre: 3,
    creditos: 4,
    prerequisitos: ["Fisica"]
  },
  {
    nombre: "Calculo Vectorial",
    semestre: 3,
    creditos: 3,
    prerequisitos: ["Calculo Integral"]
  },
  {
    nombre: "Dibujo Asistido por Computadora",
    semestre: 3,
    creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Fisica: Fluidos y Termodinamica",
    semestre: 3,
    creditos: 3,
    prerequisitos: ["Calculo"]
  },
  {
    nombre: "Responsabilidad y Ecologia",
    semestre: 3,
    creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Estadistica y Probabilidades",
    semestre: 4,
    creditos: 4,
    prerequisitos: []
  },
  {
    nombre: "Dinamica",
    semestre: 4,
    creditos: 4,
    prerequisitos: ["Fisica"]
  },
  {
    nombre: "Fisica: Electricidad y Magnetismo",
    semestre: 4,
    creditos: 4,
    prerequisitos: ["Fisica: Fluidos y Termodinamica"]
  },
  {
    nombre: "Matematica Aplicada",
    semestre: 4,
    creditos: 3,
    prerequisitos: ["Calculo Integral"]
  },
  {
    nombre: "Taller de Deportes",
    semestre: 4,
    creditos: 1,
    prerequisitos: []
  },
  {
    nombre: "Tecnologia Automotriz",
    semestre: 4,
    creditos: 4,
    prerequisitos: []
  },
  {
    nombre: "Circuitos Electricos I",
    semestre: 5,
    creditos: 4,
    prerequisitos: ["Fisica: Electricidad y Magnetismo"]
  },
  {
    nombre: "Filosofia y Etica",
    semestre: 5,
    creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Mecánica de Fluidos",
    semestre: 5,
    creditos: 3,
    prerequisitos: ["Fisica: Fluidos y Termodinamica"]
  },
  {
    nombre: "Metodos Numericos para Ingenieros",
    semestre: 5,
    creditos: 2,
    prerequisitos: ["Calculo Vectorial"]
  },
  {
    nombre: "Resistencia de Materiales I",
    semestre: 5,
    creditos: 4,
    prerequisitos: ["Estatica"]
  },
  {
    nombre: "Termodinamica I",
    semestre: 5,
    creditos: 4,
    prerequisitos: ["60 o mas creditos aprobados"]
  },
  {
    nombre: "Circuitos Electricos II",
    semestre: 6,
    creditos: 4,
    prerequisitos: ["Circuitos Electricos I"]
  },
  {
    nombre: "Resistencia de Materiales II",
    semestre: 6,
    creditos: 4,
    prerequisitos: ["Resistencia de Materiales I"]
  },
  {
    nombre: "Termodinamica II",
    semestre: 6,
    creditos: 4,
    prerequisitos: ["Termodinamica I"]
  },
  {
    nombre: "Electronica General",
    semestre: 6,
    creditos: 3,
    prerequisitos: ["80 o mas creditos aprobados"]
  },
  {
    nombre: "Fundamentos de Tecnologia Electrica",
    semestre: 6,
    creditos: 2,
    prerequisitos: ["Fisica: Electricidad y Magnetismo"]
  },
  {
    nombre: "Taller de Coaching y Liderazgo",
    semestre: 6,
    creditos: 2,
    prerequisitos: []
  },
  {
    nombre: "Oleohidraulica y Neumatica I",
    semestre: 7,
    creditos: 3,
    prerequisitos: ["Fisica: Fluidos y Termodinamica"]
  },
  {
    nombre: "Maquinas Electricas I",
    semestre: 7,
    creditos: 4,
    prerequisitos: ["Circuitos Electricos II"]
  },
  {
    nombre: "Metrologia Electrica",
    semestre: 7,
    creditos: 3,
    prerequisitos: ["Circuitos Electricos I"]
  },
  {
    nombre: "Tecnologia de la Soldadura",
    semestre: 7,
    creditos: 3,
    prerequisitos: ["Materiales de Ingenieria II"]
  },
  {
    nombre: "Turbomaquinas",
    semestre: 7,
    creditos: 4,
    prerequisitos: []
  },
  {
    nombre: "Diseño de Elementos de Maquinas",
    semestre: 7,
    creditos: 3,
    prerequisitos: ["Resistencia de Materiales I"]
  },
  {
    nombre: "Oleohidraulica y Neumatica II",
    semestre: 8,
    creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Instalaciones Electricas I",
    semestre: 8,
    creditos: 4,
    prerequisitos: []
  },
  {
    nombre: "Maquinas Electricas II",
    semestre: 8,
    creditos: 4,
    prerequisitos: []
  },
  {
    nombre: "Centrales Electricas I",
    semestre: 8,
    creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Manufactura Asistida por Computadora",
    semestre: 8,
    creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Sistemas Electricos de  Potencia I",
    semestre: 8,
    creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Alta Tension y Tecnicas de Seguridad",
    semestre: 9,
    creditos: 3,
    prerequisitos: ["140 o mas creditos aprobados"]
  },
  {
    nombre: "Ingenieria de Costos y Presupuestos",
    semestre: 9,
    creditos: 3,
    prerequisitos: ["140 o mas creditos aprobados"]
  },
  {
    nombre: "Instalaciones Electricas II",
    semestre: 9,
    creditos: 3,
    prerequisitos: ["Instalaciones Electricas I"]
  },
  {
    nombre: "Control y Automatizacion",
    semestre: 9,
    creditos: 3,
    prerequisitos: ["140 o mas creditos aprobados"]
  },
  {
    nombre: "Laboratorio de Termofluidos",
    semestre: 9,
    creditos: 2,
    prerequisitos: ["Turbomaquinas"]
  },
  {
    nombre: "Lineas de Transmision Electrica",
    semestre: 9,
    creditos: 4,
    prerequisitos: ["140 o mas creditos aprobados"]
  },
  {
    nombre: "Centrales Electricas II",
    semestre: 9,
    creditos: 3,
    prerequisitos: ["Centrales Electricas I"]
  },
  {
    nombre: "Legislacion y Tarificacion Electrica",
    semestre: 9,
    creditos: 3,
    prerequisitos: ["140 o mas creditos aprobados"]
  },
  {
    nombre: "Practicas Preprofesionales",
    semestre: 9,
    creditos: 2,
    prerequisitos: ["140 o mas creditos aprobados"]
  },
  {
    nombre: "Sensores y Transductores",
    semestre: 10,
    creditos: 3,
    prerequisitos: ["160 o mas creditos aprobados"]
  },
  {
    nombre: "Gestion de Proyectos",
    semestre: 10,
    creditos: 3,
    prerequisitos: ["160 o mas creditos aprobados"]
  },
  {
    nombre: "Sistemas de Proteccion Electrica",
    semestre: 10,
    creditos: 3,
    prerequisitos: ["160 o mas creditos aprobados"]
  },
  {
    nombre: "Sistemas Electricos de  Potencia II",
    semestre: 10,
    creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Energias Renovables",
    semestre: 10,
    creditos: 3,
    prerequisitos: ["160 o mas creditos aprobados"]
  },
  {
    nombre: "Ingenieria de Mantenimiento",
    semestre: 10,
    creditos: 3,
    prerequisitos: ["160 o mas creditos aprobados"]
  },
  {
    nombre: "Proyectos Electricos",
    semestre: 10,
    creditos: 3,
    prerequisitos: ["160 o mas creditos aprobados"]
  },
  {
    nombre: "Suministros Electricos",
    semestre: 10,
    creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Trabajo de Investigacion",
    semestre: 10,
    creditos: 2,
    prerequisitos: ["160 o mas creditos aprobados"]
  }
];
let cursosAprobados = new Set(JSON.parse(localStorage.getItem("cursosAprobados")) || []);

const contenedor = document.getElementById("root");
const creditosAprobadosSpan = document.getElementById("creditos-aprobados");
const creditosTotalesSpan = document.getElementById("creditos-totales");
const porcentajeCompletadoSpan = document.getElementById("porcentaje-completado");
const semestreActualSpan = document.getElementById("semestre-actual");
const filtroEstado = document.getElementById("filtro-estado");
const botonResetear = document.getElementById("resetear");

// Agrupar por semestre
const cursosPorSemestre = {};
cursos.forEach(curso => {
  if (!cursosPorSemestre[curso.semestre]) {
    cursosPorSemestre[curso.semestre] = [];
  }
  cursosPorSemestre[curso.semestre].push(curso);
});

// Funciones de estado
function contarCreditosAprobados() {
  return cursos
    .filter(c => cursosAprobados.has(c.nombre))
    .reduce((acc, c) => acc + c.creditos, 0);
}

function contarCreditosTotales() {
  return cursos.reduce((acc, c) => acc + c.creditos, 0);
}

function estaDisponible(curso) {
  return curso.prerequisitos.every(pr =>
    pr.includes("creditos")
      ? contarCreditosAprobados() >= parseInt(pr)
      : cursosAprobados.has(pr)
  );
}

function estadoCurso(curso) {
  if (cursosAprobados.has(curso.nombre)) return "aprobado";
  if (estaDisponible(curso)) return "disponible";
  return "bloqueado";
}

// Renderizar malla
function renderMalla() {
  contenedor.innerHTML = "";
  for (let semestre in cursosPorSemestre) {
    const bloque = document.createElement("section");
    bloque.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${semestre}`;
    bloque.appendChild(titulo);

    cursosPorSemestre[semestre].forEach(curso => {
      const estado = estadoCurso(curso);

      if (filtroEstado.value !== "todos" && filtroEstado.value !== estado) return;

      const div = document.createElement("div");
      div.className = `curso ${estado}`;
      div.textContent = curso.nombre;
      div.title = `${curso.creditos} créditos` +
        (curso.prerequisitos.length
          ? `\nPre: ${curso.prerequisitos.join(", ")}`
          : "");

     div.addEventListener("click", () => {
  if (estado === "disponible" || estado === "aprobado") {
    if (cursosAprobados.has(curso.nombre)) {
      cursosAprobados.delete(curso.nombre);
    } else {
      cursosAprobados.add(curso.nombre);
    }

    localStorage.setItem("cursosAprobados", JSON.stringify([...cursosAprobados]));
    renderMalla();
  }
});

      bloque.appendChild(div);
    });

    contenedor.appendChild(bloque);
  }

  actualizarResumen();
}

// Actualizar resumen
function actualizarResumen() {
  const aprobados = contarCreditosAprobados();
  const totales = contarCreditosTotales();
  const porcentaje = Math.round((aprobados / totales) * 100);
  const semestreEstimado = Math.ceil((aprobados / totales) * 10);

  creditosAprobadosSpan.textContent = aprobados;
  creditosTotalesSpan.textContent = totales;
  porcentajeCompletadoSpan.textContent = `${porcentaje}%`;
  semestreActualSpan.textContent = semestreEstimado;
}

// Eventos
filtroEstado.addEventListener("change", renderMalla);
botonResetear.addEventListener("click", () => {
  if (confirm("¿Seguro que quieres reiniciar tu malla?")) {
    cursosAprobados.clear();
    localStorage.removeItem("cursosAprobados");
    renderMalla();
  }
});


// Iniciar
renderMalla();

