// Obtener la diferencia de anios
export const obtenerDiferenciaYear = (year) => new Date().getFullYear() - year;

// Calcula el total a pagar segun la marca
export const calcularMarca = (marca) => {
  let incremento;

  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento;
};

// Calcular el tipo de seguro
export const obtenerPlan = (plan) => (plan === "basico" ? 1.2 : 1.5);

// Muestra la primer letra mayuscula
export const primerMayuscula = (texto) =>
  `${texto.charAt(0).toUpperCase()}${texto.slice(1)}`;
