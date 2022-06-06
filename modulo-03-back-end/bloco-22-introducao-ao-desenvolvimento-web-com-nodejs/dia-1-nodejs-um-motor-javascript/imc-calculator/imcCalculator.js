const imcCalculator = (height, weight) => {
  const imc = weight / (height * height)
  return imc
}
  
const feedback = (imc) => {
  if (imc < 18.5) {
    return `IMC = ${imc} - Abaixo do peso (magreza)`
  } else if (imc >= 18.5 && imc < 25) {
    return `IMC = ${imc} - Peso normal`
  } else if (imc >= 25 && imc < 30) {
    return `IMC = ${imc} - Acima do peso (sobrepeso)`
  } else if (imc >= 30 && imc < 35) {
    return `IMC = ${imc} - Obesidade grau I`
  } else if (imc >= 35 && imc < 40) {
    return `IMC = ${imc} - Obesidade grau II`
  } else if (imc >= 40) {
    return `IMC = ${imc} - Obesidade graus III e IV`
  } else {
    return `Valor inválido`
  }
}


  module.exports = {
    imcCalculator,
    feedback
  }
