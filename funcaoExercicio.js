function antecessor(numero) {
    return numero - 1
}
console.log(antecessor(10));
console.log("**********************************\n")

function sucessor(numero) {
    return numero + 1
}
console.log(sucessor(10));
console.log("**********************************\n")

function converterTemperatura(numero) {
    return (numero*9/5) + 32
}
console.log(converterTemperatura(30));
console.log("**********************************\n")

function verificarIdade(numero) {
    if (numero >= 18) {
        return "Maior de Idade"
    } else {
        return "Menor de Idade"
    }
}
console.log(verificarIdade(20));
console.log("**********************************\n")

function calcularDesconto(numero1, numero2) {
    let desconto = numero1 * (numero2/100)
    return numero1 - desconto
}
console.log(calcularDesconto(100, 10))
console.log("**********************************\n")