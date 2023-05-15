function somar(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let resultado = numero1 + numero2;
    //alert("O resultado da soma é igual "+resultado);
    document.getElementById("resultado").value = resultado;
}

function subtrair(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let resultado = numero1 - numero2;
    //alert("O resultado da soma é igual "+resultado);
    document.getElementById("resultado").value = resultado;
}

function multiplicar(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let resultado = numero1 * numero2;
    //alert("O resultado da soma é igual "+resultado);
    document.getElementById("resultado").value = resultado;
}

function dividir(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let resultado = numero1 / numero2;
    // alert("O resultado da soma é igual "+resultado);
    document.getElementById("resultado").value = resultado;
}


// innerHTML pega o texto
// getElementsByClassName pegar os elementos com classe btnCalc
function calcular(qualquernome){
   
    if(qualquernome=="somar"){
        somar();
    }

    if(qualquernome=="subtrair"){
        subtrair();
    }

    if(qualquernome=="multiplicar"){
        multiplicar();
    }

    if(qualquernome=="dividir"){
        dividir();
    }
}