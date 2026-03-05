const proyectos = [
  { nombre: "Proyecto A", presupuesto: 10000000, gastos: [2000000, 3000000] },
  { nombre: "Proyecto B", presupuesto: 5000000, gastos: [4000000, 2000000] }
];

function analizarProyectos(proyectos) {

  const proyectosEnRiesgo = [];
  let totalPresupuesto = 0;
  let totalGastado = 0;

  const informe = proyectos.map(proyecto => {


    const gastoTotal = proyecto.gastos.reduce((acc, gasto) => acc + gasto, 0);


    const estado = gastoTotal > proyecto.presupuesto 
      ? "Excedido" 
      : "Dentro del presupuesto";


    const porcentajeEjecucion = (gastoTotal / proyecto.presupuesto) * 100;

  
    totalPresupuesto += proyecto.presupuesto;
    totalGastado += gastoTotal;

    if (gastoTotal > proyecto.presupuesto) {
      proyectosEnRiesgo.push(proyecto.nombre);
    }

    return {
      nombre: proyecto.nombre,
      gastoTotal,
      estado,
      porcentajeEjecucion
    };
  });

  const porcentajeEjecucionGeneral = (totalGastado / totalPresupuesto) * 100;

  return {
    informe,
    proyectosEnRiesgo,
    porcentajeEjecucionGeneral
  };
}

const resultado = analizarProyectos(proyectos);

console.log("Informe de proyectos:");
console.log(resultado.informe);

console.log("Proyectos en riesgo:");
console.log(resultado.proyectosEnRiesgo);

console.log("Porcentaje ejecución general:");
console.log(resultado.porcentajeEjecucionGeneral);

