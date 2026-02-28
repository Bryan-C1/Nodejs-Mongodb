function validarIngresos(ingresos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ingresos >= 5000000) {
        resolve(ingresos);
      } else {
        reject("Ingresos insuficientes");
      }
    }, 1000);
  });
}

function validarHistorial(antecedentes) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (antecedentes === "Bueno") {
        resolve(antecedentes);
      } else {
        reject("Historial crediticio no válido");
      }
    }, 1000);
  });
}

function aprobarPrestamo(ingresos, antecedentes) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ingresos >= 5000000 && antecedentes === "Bueno") {
        resolve("Préstamo aprobado");
      } else {
        reject("Préstamo rechazado");
      }
    }, 1000);
  });
}

async function realizarPrestamo() {
  try {
    const ingresos = await validarIngresos(6000000);
    const historial = await validarHistorial("Bueno");
    const resultado = await aprobarPrestamo(ingresos, historial);
    console.log(resultado);
  } catch (error) {
    console.error("Error:", error);
  }
}

realizarPrestamo();