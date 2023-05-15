console.log
//atividade_01 - 1 - Escreva uma função em JavaScript que mostre na tela a mensagem “Bom dia, Mundo!!!”.
window.onload = function() {
    let mensagemLabel = document.getElementById("mensagem");
    mensagemLabel.innerText = "Bom dia mundo!!!";
    alert("Bom dia mundo!!!")
}
//atividade_02 - 2- Escreva uma função que retorne o cubo de um número fornecido pelo usuário.

function cubo(){
    let numero1 = parseFloat(document.getElementById("valor_real").value);
    let resultado = numero1 **3;

    document.getElementById("valor_ao_cubo").value = resultado;
}

//atividade_03 - 3- Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C).Dica: para converter uma temperatura em F para C, subtraia 32 da temperatura e multiplique o resultado por 0,5556 (ou 5/9).

function converter(){
    let Fahrenheit = parseFloat(document.getElementById("Fahrenheit").value);
    let celsius = ((Fahrenheit - 32) * (5/9)).toFixed(2);

    document.getElementById("celsius").value = celsius;

}

//atividade_04 - 4- Escreva uma função que retorne a área de um triângulo, a partir dos valores de base e altura fornecidos.

function areaTriangulo(){
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let triangulo = ((base * altura) / 2);

    document.getElementById("areaTriangulo").value = triangulo;
}

// 5- Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido.

function calcRaio(){
    let raio = parseFloat(document.getElementById("raioCincun").value);

    let areaCircun = (Math.PI * (raio**2)).toFixed(2);

    let perimCircun = ((2*Math.PI) * raio).toFixed(2);

    document.getElementById("areaCircun").value = areaCircun;

    document.getElementById("perimCircun").value = perimCircun;

}

// 6-  Crie uma função que calcula 5% de desconto retornando o valor do desconto.

function desconto(){
    let valorProd = parseFloat(document.getElementById("valorProd").value);
    
    let resultDesconto = (valorProd - (valorProd*0.05).toFixed(2));

    document.getElementById("desconto").value = resultDesconto

}

// 7- Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function nascimento(){
    let data = document.getElementById("nascimento").value;
    let idadeCalc = (2023 - data);

    document.getElementById("idadeM").innerHTML = idadeCalc;

    if(idadeCalc>=18){
        document.getElementById("idadeM").innerHTML = "Essa pessoa é maior e tem "+idadeCalc+ " anos";
    }else{
        document.getElementById("idadeM").innerHTML = "Essa pessoa é menor de idade e tem "+idadeCalc+"anos";
    }


}

// 8- Um novo modelo de carro, super econômico foi lançado. Ele faz 20 km com 1 litro de combustível. Cada litro de combustível custa R$ 5,00.Faça um programa que pergunte ao usuário quanto de dinheiro ele tem e em seguida diga quantos litros de combustível ele pode comprar e quantos kilometros o carro consegue andar com este tanto de combustível.Seu script será usado no computador de bordo do carro.

function calculoComb(){
    let valorDesejado = parseFloat(document.getElementById("reais").value);

    let quantidadeLit = valorDesejado / 5;
    let km = quantidadeLit * 20;

    document.getElementById("quantidadeLit").innerHTML = "A quantidade será de "+quantidadeLit+" litros com essa quantidade o veiculo podera andar "+km+ " km"
}