function fatorial() { //função fatorial
    let numero = parseInt(document.getElementById("val").value);// let numero é a variavel, ela recebe um valor inputado no html.
    let resultado = 1;// Definimos esta variavel como 1 pois a conta será realizada ate chegar a 1.
    // for =>> O laço de repetição criou uma variavel, onde i recebe numero, i tem que ser maior que 1; i-- pois a conta do fatorial ela vai mult. ate chegar a 1
    for (let i = numero; i > 1; i--) {
        resultado = resultado * i;// conta operador logico do fatorial resultado recebe resultado x i 

    }

    document.getElementById("exibeRes").innerHTML = resultado; // escrever no html o resultado deste calculo
}
