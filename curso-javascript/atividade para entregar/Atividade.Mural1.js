var bemVindo = document.getElementById("bemVindo");

function entrar(){
    var nome = prompt("Digite seu nome :");
    if(nome=="" || nome == null){
        alert("Por favor Preencher o campo de nome !!");
        bemVindo.innerHTML = "Clique no botão para acessar ...";
        
    }else{
        bemVindo.innerHTML = "Bem Vindo "+nome;
    }
}

function calcular(id){
    let array = new Array;
    array[0] = parseInt(document.getElementById("num1").value);
    array[1] = parseInt(document.getElementById("num2").value);
    if(id=="somar"){
        somar(array);
    }
    if(id=="subtrair"){
        subtrair(array);
    }
    if(id =="multiplicar"){
        multiplicar(array);
    }
    if(id=="dividir"){
        dividir(array);
    }
}

function somar(array){
    let resultado = array[0]+array[1];

    document.getElementById("resultado").value = resultado;

}

function subtrair(array){
    let resultado = array[0]-array[1];

    document.getElementById("resultado").value = resultado;
    
}

function multiplicar(array){
    let resultado = array[0]*array[1];

    document.getElementById("resultado").value = resultado;
    
}

function dividir(array){
    let resultado = array[0]+array[1];

    document.getElementById("resultado").value = resultado;
    
}