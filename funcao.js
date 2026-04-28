function subtrair (num1, num2){        //parametros     // escopo local
    console.log("Calculando...");
    return num1 - num2
}
console.log(subtrair(10, 3));       //argumentos

console.log("*************************************\n");

function multiplicar (num1, num2){        //parametros
    console.log("Calculando...");
    return num1 * num2
}
console.log(multiplicar(4, 5));
console.log("*************************************\n");


function dividir(num1, num2){
    if(num2 === 0){
    return "Não é possível dividir por zero"
    }
    return num1 / num2
}
console.log(dividir(4, 0));
console.log("*************************************\n");

function dobro(numero){
    return numero * 2
}
console.log(dobro(5));
console.log("*************************************\n");

function maiorNumero(num1, num2){
    if(num1 > num2){
        return num1    //verdadeiro
    }else{
        return num2    // falso
    }
}
console.log(maiorNumero(15, 9));
console.log("*************************************\n");

function parImpar(numero){
    if(numero % 2 === 0){
        return "Número Par"
    }else{
        return "Número Impar"
    }
}
console.log(parImpar(92));
console.log("*************************************\n");

function saudacao(nome){
    return `Olá, ${nome} ! Seja bem vindo!`
}
console.log(saudacao("Jonathan"));
console.log("*************************************\n");

function calcularIdade(anoNascimento){
    let anoAtual = 2026
    return anoAtual - anoNascimento
}
console.log(calcularIdade(2000));
console.log("*************************************\n");

function verificarAprovacao(mediaAluno){
    if(mediaAluno >=7){
        return "Aprovado"
    }else if(mediaAluno >=5){
        return "Recuperação"
    }else{
        return "Reprovado"
    }
}
console.log(verificarAprovacao(7));
console.log("*************************************\n");

function tabuada(numero) {
    for(let cont = 1; cont <=10; cont++){
        console.log(`${numero} X ${cont} = ${numero*cont}`)
    }
}
tabuada(5)
console.log("*************************************\n");